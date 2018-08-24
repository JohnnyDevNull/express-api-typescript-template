import { Request, Response, NextFunction } from 'express';
import { BaseRestModel } from '../models/base-rest-model';
import * as jwt from 'jsonwebtoken';
import { environment } from '../environment';

export class TokenController {

  public getTokenInfo = (req: Request, res: Response) => {
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'getTokenInfo success!'
      },
      data: {
        user: (<any>req).user
      }
    };
    res.json(result);
  }

  public createToken = (req: Request, res: Response) => {
    // Mock User
    const user = {
      id: 1,
      username: 'test',
      mail: 'test.test@test.com'
    };

    const token = jwt.sign(
      { user },
      environment.jwtSecret,
      { issuer: environment.jwtIssuer, expiresIn: '30s' }
    );

    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'success'
      },
      data: {
        token: token
      }
    };
    res.json(result);
  }

  public updateToken = (req: Request, res: Response) => {
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'updateToken success!'
      },
      data: {}
    };
    res.json(result);
  }

  public deleteToken = (req: Request, res: Response) => {
    const result: BaseRestModel = {
      meta: {
        code: 0,
        message: 'deleteToken success!'
      }
    };
    res.json(result);
  }

  public verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
      // split at the space
      const bearer = bearerHeader.split(' ');
      // get the token from the array
      const bearerToken = bearer[1];
      // verify set the decoded user request data
      (<any>req).user = jwt.verify(bearerToken, environment.jwtSecret);
      // call the next middleware
      next();
    } else {
      const err = new Error('Invalid Token');
      (<any>err).status = '401';
      throw err;
    }
  }
}
