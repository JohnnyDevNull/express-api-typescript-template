import { Request, Response } from 'express';
import { BaseRestModel } from '../models/base-rest-model';

export class IndexController {
  public getIndex (req: Request, res: Response) {
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'The api is online!',
      }
    };
    res.json(result);
  }
}
