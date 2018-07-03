import { BaseRestModel } from './../models/base-model';
import { Request, Response } from 'express';

export class IndexController {
  public getIndex (req: Request, res: Response) {
    const result: BaseRestModel = {
      code: 0,
      message: 'The api is online!',
      meta: {}
    };
    res.json(result);
  }
}
