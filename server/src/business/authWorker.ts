import { Config } from '@/entities/config';
import { RegisterRequest } from '@/entities/user';
import { iAuthDAO } from '@/interfaces/iAuthDAO';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import jwt from 'jsonwebtoken';
import { Logger } from 'log4js';

export class AuthWorker {
  private db: iAuthDAO;
  private config: Config;
  private log: Logger;
  constructor(db: iAuthDAO, config: Config, log: Logger) {
    this.db = db;
    this.config = config;
    this.log = log;
  }

  public async register(registerRequest: RegisterRequest) {
    try {
      if (
        !registerRequest.username ||
        !registerRequest.password ||
        !registerRequest.email
      ) {
        throw new SyntaxError('Missing required fields');
      }
      if (!(await this.validateEmail(registerRequest.email))) {
        throw new SyntaxError('Invalid email');
      }
      registerRequest.password = await this.hashPassword(
        registerRequest.password
      );
      const user = await this.db.createUser(registerRequest);
      this.log.info(`Created user ${registerRequest.username}`);
      //   return authData;
    } catch (err) {
      throw err;
    }
  }
  public async login() {}

  public async generateAccessToken(userId: number): Promise<string> {
    const secret = this.config.appAccessTokenSecret;
    const expiresIn = this.config.appAccessTokenExpiresIn;
    const token = jwt.sign({ userId }, secret, { expiresIn });
    return token;
  }
  public async generateRefreshToken(userId: number): Promise<string> {
    const secret = this.config.appRefreshTokenSecret;
    const expiresIn = this.config.appRefreshTokenExpiresIn;
    const token = jwt.sign({ userId }, secret, { expiresIn });
    return token;
  }
  public async verifyAccessToken(token: string) {}
  public async verifyRefreshToken(token: string) {}
  public async generateAccessCode(userId: number): Promise<string> {
    const code = randomUUID();
    return code;
  }
  public async verifyAccessCode(
    userId: number,
    code: string
  ): Promise<boolean> {
    return true;
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.config.appBcryptSaltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
  private async validatePassword(password: string, hash: string) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }
  private async validateEmail(email: string): Promise<boolean> {
    const emailRegex = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
    );
    return new Promise((resolve, reject) => {
      if (emailRegex.test(email)) {
        resolve(true);
      } else {
        resolve(false);
      }
      reject(false);
    });
  }
}
