import { IndexController } from '../controllers/index-controller';
import { isProdMode } from '../environment';
import { ArtcilesRouter } from './articles-router';
import { TokenRouter } from './token-router';
import { UsersRouter } from './users-router';

export class MainRouter {

  public indexCtrl: IndexController = new IndexController();

  public attach(app): void {
    this.addRoutes(app);
    this.addErrorHandler(app);
  }

  private addRoutes(app) {
    app.route('/').get(this.indexCtrl.getIndex);

    const articlesRouter = new ArtcilesRouter();
          articlesRouter.attach(app);

    const usersRouter = new UsersRouter();
          usersRouter.attach(app);

    const tokenRouter = new TokenRouter();
          tokenRouter.attach(app);
  }

  private addErrorHandler(app) {
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      const err = new Error('Not Found');
      (<any>err).status = 404;
      next(err);
    });
    // development error handler
    if (!isProdMode()) {
      app.use(function(err, req, res, next) {
        console.log(err.stack);
        res.status(err.status || 500);
        res.json({'meta': {
          code: err.status,
          message: err.message
        }});
      });
    }
    // production error handler
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.json({'meta': {
        code: err.status,
        message: err.message
      }});
    });
  }
}
