import { Application } from 'express';
import { ArticlesController } from '../controllers/articles-controller';

export class ArtcilesRouter {

  public articleCtrl: ArticlesController = new ArticlesController();

  public attach(app: Application): void {
    // Articles
    app.route('/article')
    // GET - List
    .get(this.articleCtrl.getArticles)
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
