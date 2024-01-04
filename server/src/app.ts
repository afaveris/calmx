import { AuthRoute } from './routes/authRoute';
import { Config } from '@/entities/config';
import { requestLog } from '@/middlewares/requestLog';
import { BaseRoute } from '@/routes/baseRoute';
import { logger } from '@/utils/logger';
import express, { Express } from 'express';
import fs from 'fs';
import https from 'https';
import pg from 'pg';
import YAML from 'yaml';

export class App {
  private readonly app: Express;
  private routes: Array<BaseRoute> = [];
  private config: Config = new Config(
    YAML.parse(fs.readFileSync('config/config.yml', 'utf8'))
  );
  private log = logger(
    JSON.parse(fs.readFileSync(this.config.appLogConfigPath, 'utf8'))
  );
  protected dbPool: pg.Pool = new pg.Pool({
    host: this.config.dbHost,
    port: this.config.dbPort,
    user: this.config.dbUser,
    password: this.config.dbPassword,
    database: this.config.dbName,
    max: this.config.dbMaxPoolSize,
  });
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(requestLog(this.log.serverLogger));
    this.dbPool.connect((err, client, done) => {
      if (err) {
        this.log.serverLogger.error(err);
      } else {
        this.log.serverLogger.info('Connected to database');
      }
      done();
    });

    this.routes.push(
      new AuthRoute(this.app, 'AuthRoute', this.config, this.dbPool, this.log)
    );
  }

  public getApp(): Express {
    return this.app;
  }

  public getRoutes(): Array<BaseRoute> {
    return this.routes;
  }

  private configureListen(): void {
    const textInfoRoutes = () => {
      this.routes.map((route) => {
        this.log.serverLogger.info('Routes configured for ' + route.getName());
      });
    };

    const textInfoServerRunning = {
      http: () => {
        this.log.serverLogger.info(
          `Server is running at http://${this.config.appHost}:${this.config.appPort}`
        );
      },
      https: () => {
        this.log.serverLogger.info(
          `Server is running at https://${this.config.appHost}:${this.config.appPort}`
        );
      },
    };

    if (this.config.appUseHttps) {
      const httpsOptions = {
        key: fs.readFileSync(this.config.appHttpsKey),
        cert: fs.readFileSync(this.config.appHttpsCert),
      };
      https
        .createServer(httpsOptions, this.app)
        .listen(this.config.appPort, this.config.appHost, () => {
          textInfoRoutes();
          textInfoServerRunning.https();
        });
    } else {
      this.app.listen(this.config.appPort, this.config.appHost, () => {
        textInfoRoutes();
        textInfoServerRunning.http();
      });
    }
  }

  public start(): void {
    if (this.config.appPort == undefined || this.config.appHost == undefined) {
      throw new Error('Config vars is not set');
    }
    this.configureListen();
  }
}
