import { Request, Response } from 'express';
import { BaseRestModel } from '../models/base-rest-model';

export class ArticlesController {

  public addArticle (req: Request, res: Response) {
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'addArticle success!',
      },
    };

    res.json(result);
  }

  public getArticles (req: Request, res: Response) {
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'getArticles success!',
        hasMore: true,
        count: 2
      },
      data: [
        { id: 1, title: 'Lore Ipsum' },
        { id: 2, title: 'Lore Ipsum 2' }
      ],
    };

    res.json(result);
  }

  public getArticleById (req: Request, res: Response) {
    const articleId = +req.params.articleId;
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'getArticleById: ' + articleId,
      },
    };
    res.json(result);
  }

  public createArticle (req: Request, res: Response) {
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'createArticle success!',
      },
    };
    res.json(result);
  }

  public updateArticleById (req: Request, res: Response) {
    const articleId = +req.params.articleId;
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'updateArticleById: ' + articleId,
      },
    };
    res.json(result);
  }

  public deleteArticleById (req: Request, res: Response) {
    const articleId = +req.params.articleId;
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'deleteArticleById: ' + articleId,
      },
    };
    res.json(result);
  }
}
