import { BaseRestModel } from './../models/base-model';
import { Request, Response } from 'express';

export class ArticleController {

  public addArticle (req: Request, res: Response) {
    const result: BaseRestModel = {
      code: 0,
      message: 'success',
      meta: {}
    };
    res.json(result);
  }

  public getArtciles (req: Request, res: Response) {
    const result: BaseRestModel = {
      code: 0,
      message: 'success',
      data: [
        { id: 1, title: 'Lore Ipsum' },
        { id: 2, title: 'Lore Ipsum 2' }
      ],
      meta: {
        hasMore: true,
        count: 2
      }
    };

    res.json(result);
  }

  public getArticleById (req: Request, res: Response) {
    const articleId = +req.params.articleId;
    const result: BaseRestModel = {
      code: 0,
      message: 'getArticleById: ' + articleId,
      meta: {}
    };
    res.json(result);
  }

  public createArticle (req: Request, res: Response) {
    const result: BaseRestModel = {
      code: 0,
      message: 'createArticle success!',
      meta: {}
    };
    res.json(result);
  }

  public updateArticleById (req: Request, res: Response) {
    const articleId = +req.params.articleId;
    const result: BaseRestModel = {
      code: 0,
      message: 'updateArticleById: ' + articleId,
      meta: {}
    };
    res.json(result);
  }

  public deleteArticleById (req: Request, res: Response) {
    const articleId = +req.params.articleId;
    const result: BaseRestModel = {
      code: 0,
      message: 'deleteArticleById: ' + articleId,
      meta: {}
    };
    res.json(result);
  }
}
