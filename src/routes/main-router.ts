import { ArticleController } from './../controllers/article-controller';
import { IndexController } from '../controllers/index-controller';

export class MainRouter {

  public indexCtrl: IndexController = new IndexController();
  public articleCtrl: ArticleController = new ArticleController();

  public attach(app): void {

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
}
