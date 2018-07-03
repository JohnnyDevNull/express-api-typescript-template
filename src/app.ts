import * as bodyParser from 'body-parser';
import * as errorhandler from 'errorhandler';
import * as express from 'express';
import * as morgan from 'morgan';
import { environment } from './environment';
import { MainRouter } from './routes/main-router';


class App {

  public app: express.Application;
  public router: MainRouter = new MainRouter();

  constructor() {
    this.app = express();
    this.config();
    this.router.attach(this.app);

    if (process.env.NODE_ENV === 'production') {
      environment.production = true;
    }
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // log all request in the Apache combined format
    // see: https://www.npmjs.com/package/morgan
    this.app.use(morgan('combined'));

    // sanitizing user input
    // see: https://www.npmjs.com/package/sanitize
    this.app.use(require('sanitize').middleware);

    if (!environment.production) {
      console.log('The server run in development mode!');
      // only use in development
      // see: https://www.npmjs.com/package/errorhandler
      this.app.use(errorhandler());
    }
  }

}

export default new App().app;
