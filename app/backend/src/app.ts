import { Request, Response, NextFunction } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'express-async-errors';
import * as cors from 'cors';

import router from './routes';
import AppError from './errors/AppError';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(bodyParser.json());
    this.app.use(cors());

    this.app.use(router);

    this.app.use((err: Error, request: Request, res: Response, _: NextFunction) => {
      if (err instanceof AppError) {
        return res.status(err.code).json({ message: err.message });
      }

      return res.status(500).json({ status: 'error', message: 'Internal server error' });
    });
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Service started 🟢 ${PORT}`));
  }
}

export { App };

export const { app } = new App();
