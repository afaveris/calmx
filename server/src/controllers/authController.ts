import { AuthWorker } from '@/business/authWorker';
import { BaseController } from '@/controllers/baseController';
import { AuthDAO } from '@/data/authDAO';
import { Config } from '@/entities/config';
import { ServerResponse } from '@/entities/serverResponse';
import { RegisterRequest } from '@/entities/user';
import Express from 'express';
import pg from 'pg';

export class AuthController extends BaseController {
  constructor(config: Config, dbPool: pg.Pool, logs: LOGS.ILog) {
    super(config, dbPool, logs);
  }

  public register = async (req: Express.Request, res: Express.Response) => {
    const authWorker = new AuthWorker(
      await new AuthDAO(this.dbPool, this.logs.dataLogger),
      this.config,
      this.logs.business
    );
    try {
      const data = new RegisterRequest(
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.socialId,
        req.body.socialNetworkData,
        req.body.dateOfBirth
      );
      const request = await authWorker.register(data);
      return res.status(request.httpCode).send(request.serialize());
    } catch (err) {
      if (err instanceof SyntaxError) {
        this.logs.businessLogger.error(err.message);
        const msg = new ServerResponse(
          ServerResponse.Code.BadRequest,
          err.message,
          1
        );
        return res.status(msg.httpCode).send(msg.serialize());
      }
    }
  };
  public async login() {}
}
