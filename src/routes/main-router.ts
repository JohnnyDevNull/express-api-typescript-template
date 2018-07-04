import { IndexController } from '../controllers/index-controller';
import { isProdMode } from '../environment';
import { ArticleController } from './../controllers/article-controller';

export class MainRouter {

  public indexCtrl: IndexController = new IndexController();
  public articleCtrl: ArticleController = new ArticleController();

  public attach(app): void {
    this.addRoutes(app);
    this.addErrorHandler(app);
  }

  private addRoutes(app) {
    app.route('/').get(this.indexCtrl.getIndex);

    // Articles
    app.route('/article')
    // GET - List
    .get(this.articleCtrl.getArtciles)
    // POST - Create
    .post(this.articleCtrl.createArticle);

    // Article Single
    app.route('/article/:articleId')
    // GET Single
    .get(this.articleCtrl.getArticleById)
    // Update Article
    .put(this.articleCtrl.updateArticleById)
    // Delete Article
    .delete(this.articleCtrl.deleteArticleById);
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
        res.json({'errors': {
          message: err.message,
          error: err
        }});
      });
    }
    // production error handler
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.json({'errors': {
        message: err.message,
        error: {}
      }});
    });
  }
}
