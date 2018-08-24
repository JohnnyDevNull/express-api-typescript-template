import { Request, Response } from 'express';
import { BaseRestModel } from '../models/base-rest-model';

export class UsersController {

  public getUsers = (req: Request, res: Response) => {
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'getUsers success!'
      }
    };
    res.json(result);
  }

  public createUser = (req: Request, res: Response) => {
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'createUser success!'
      }
    };
    res.json(result);
  }

  public getUserById = (req: Request, res: Response) => {
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'getUserById success!'
      }
    };
    res.json(result);
  }

  public updateUserById = (req: Request, res: Response) => {
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'updateUserById success!'
      }
    };
    res.json(result);
  }

  public deleteUserById = (req: Request, res: Response) => {
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'deleteUserById success!'
      }
    };
    res.json(result);
  }
}
