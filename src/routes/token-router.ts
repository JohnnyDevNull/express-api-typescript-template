import { Application } from 'express';
import { TokenController } from '../controllers/token-controller';

export class TokenRouter {

  public tokenCtrl: TokenController = new TokenController();

  public attach(app: Application): void {
    app.route('/token')
    // GET Token validity
    .get(this.tokenCtrl.verifyToken, this.tokenCtrl.getTokenInfo)
    // POST Get new Token
    .post(this.tokenCtrl.createToken)
    // DELETE Token
    .delete(this.tokenCtrl.deleteToken);
  }
}
