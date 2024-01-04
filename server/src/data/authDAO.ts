import { AccessToken } from '@/entities/accessToken';
import { RefreshToken } from '@/entities/refreshToken';
import { ServerResponse } from '@/entities/serverResponse';
import { RegisterRequest, User } from '@/entities/user';
import { iAuthDAO } from '@/interfaces/iAuthDAO';
import { Logger } from 'log4js';
import pg from 'pg';

export class AuthDAO implements iAuthDAO {
  private dbPool: pg.Pool;
  private log: Logger;
  constructor(dbPool: pg.Pool, log: Logger) {
    this.dbPool = dbPool;
    this.log = log;
  }
  public async createUser(
    registerRequest: RegisterRequest
  ): Promise<User | null> {
    const client = await this.dbPool.connect();
    const {
      username,
      password,
      email,
      socialNetworkId,
      socialNetworkData,
      dateOfBirth,
    } = registerRequest;
    try {
      await client.query('BEGIN');
      const socialNetworkIdInsert = await client.query(
        'INSERT INTO social_network (type_network_id, data) VALUES ($1, $2) RETURNING id',
        [socialNetworkId, socialNetworkData]
      );

      const user = await client.query(
        'INSERT INTO users (username, password, email, social_network_id, data_of_birth) VALUES ($1, $2, $3, $4, $5) RETURNING id',
        [
          username,
          password,
          email,
          socialNetworkIdInsert.rows[0].id,
          dateOfBirth,
        ]
      );
      const userId = user.rows[0].id;
      this.log.info(`Created user ${username} with id ${userId}`);
      await client.query('COMMIT');
      return new User(
        userId,
        username,
        password,
        email,
        socialNetworkIdInsert.rows[0].id,
        socialNetworkData,
        dateOfBirth,
        new Date(),
        new Date()
      );
    } catch (err) {
      await client.query('ROLLBACK');
      this.log.error(err);
      return null;
    } finally {
      client.release();
    }
  }
  public async getAccessToken(usernameId: string): Promise<any> {}
  public async getRefreshToken(usernameId: string): Promise<any> {}
  public insertAccessToken = async (accessToken: AccessToken) => {
    const client = await this.dbPool.connect();
    try {
      const query =
        'INSERT INTO access_tokens (token, parent_id, user_id) VALUES ($1, $2, $3) RETURNING id';
      const res = await client.query(query, [
        accessToken.token,
        accessToken.parentId,
        accessToken.userId,
      ]);
      this.log.info(`Inserted access token ${accessToken.token}`);
      if (res == null || res.rows.length === 0) {
        this.log.error('Failed to insert access token');
        throw new Error('Failed to insert access token');
      }
      return res.rows[0].id;
    } catch (err) {
      this.log.error(err);
      throw new Error('Failed to insert access token');
    } finally {
      if (client != null) {
        client.release();
      }
    }
  };
  public insertRefreshToken = async (refreshToken: RefreshToken) => {
    const client = await this.dbPool.connect();
    try {
      const query =
        'INSERT INTO refresh_tokens (token, parent_id, user_id, common_ancestor_id, status) VALUES ($1, $2, $3, $4, $5) RETURNING id';
      const res = await client.query(query, [
        refreshToken.token,
        refreshToken.parentId,
        refreshToken.userId,
        refreshToken.commonAncestorId,
        refreshToken.status,
      ]);
      //   dataLogger.debug(query);
      this.log.info(`Inserted refresh token ${refreshToken.token}`);
      if (res == null || res.rows.length === 0) {
        // dataLogger.error('Failed to insert refresh token');
        this.log.error('Failed to insert refresh token');
        throw new Error('Failed to insert refresh token');
      }
      return res.rows[0].id;
    } catch (err) {
      //   dataLogger.error(err);
      this.log.error(err);
      throw new Error('Failed to insert access token');
    } finally {
      if (client != null) {
        client.release();
      }
    }
  };
  public async updateAccessToken(accessToken: any): Promise<void> {}
  public async updateRefreshToken(
    refreshToken: any,
    newRefreshToken: any
  ): Promise<void> {}
  public async deleteAccessToken(id: number): Promise<void> {}
  public async deleteRefreshToken(id: number): Promise<void> {}
}
