import { Config } from '@/entities/config';
import { Logger } from 'log4js';
import pg from 'pg';

export class BaseController {
  public config: Config;
  public dbPool: pg.Pool;
  public logs: LOGS.ILog;
  constructor(config: Config, dbPool: pg.Pool, logs: LOGS.ILog) {
    this.config = config;
    this.dbPool = dbPool;
    this.logs = logs;
  }
}
