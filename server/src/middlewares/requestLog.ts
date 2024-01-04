import { NextFunction, Request, Response } from 'express';
import { Logger } from 'log4js';

export const requestLog = (log: Logger) => {
  return (req: Request, res: Response, next: NextFunction) => {
    log.info(
      `[${req.method}] ${req.path}, ${req.socket.remoteAddress}:${req.socket.remotePort}`
    );
    next();
  };
};
