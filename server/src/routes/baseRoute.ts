import { Config } from '@/entities/config';
import express from 'express';
import pg from 'pg';

export abstract class BaseRoute {
  app: express.Application;
  name: string;
  config: Config;
  dbPool: pg.Pool;
  logs: LOGS.ILog;
  constructor(
    app: express.Application,
    name: string,
    config: Config,
    dbPool: pg.Pool,
    logs: LOGS.ILog
  ) {
    this.app = app;
    this.name = name;
    this.config = config;
    this.dbPool = dbPool;
    this.logs = logs;
    this.configureRoutes();
  }

  public getName = () => {
    return this.name;
  };

  abstract configureRoutes(): express.Application;
}
