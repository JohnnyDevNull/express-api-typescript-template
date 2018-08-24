import { Application } from 'express';
import { UsersController } from '../controllers/users-controller';

export class UsersRouter {

  public usersCtrl: UsersController = new UsersController();

  public attach(app: Application): void {

    app.route('/user')
    .get(this.usersCtrl.getUsers)
    .post(this.usersCtrl.createUser);

    app.route('/user/:userId')
    .get(this.usersCtrl.getUserById)
    .put(this.usersCtrl.updateUserById)
    .delete(this.usersCtrl.deleteUserById);

  }
}
