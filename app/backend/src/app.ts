import * as express from 'express';
import * as bodyParser from 'body-parser';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(bodyParser.json());
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log('Service started 🟢'));
  }
}

export { App };

export const { app } = new App();
