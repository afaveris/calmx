import { AuthController } from '@/controllers/authController';
import { Config } from '@/entities/config';
import { BaseRoute } from '@/routes/baseRoute';
import express from 'express';
import pg from 'pg';

export class AuthRoute extends BaseRoute {
  constructor(
    app: express.Application,
    name: string,
    config: Config,
    dbPool: pg.Pool,
    logs: LOGS.ILog
  ) {
    super(app, name, config, dbPool, logs);
  }

  public configureRoutes(): express.Application {
    const controller: AuthController = new AuthController(
      this.config,
      this.dbPool,
      this.logs
    );
    const baseUri: string = `/${this.config.apiURI}/${this.config.apiVersion}/auth`;

    this.app.post(`${baseUri}/register`, controller.register);
    this.app.post(`${baseUri}/login`, controller.login);

    return this.app;
  }
}
