import { ConnectionOptions } from 'typeorm';
import { UserEntity } from './models/schema/user';
import { UserGroupEntity } from './models/schema/user-group';
import { UserSessionEntity } from './models/schema/user-session';

export const environment = {
  production: false,
  jwtSecret: 'my!Super$Secret+2018=',
  jwtIssuer: 'express-api-typescript-template'
};

export function isProdMode(): boolean {
  return environment.production;
}

export function getDBConf(): ConnectionOptions {
  return {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'orm_express_test',
    synchronize: true,
    entities: [
      UserEntity,
      UserGroupEntity,
      UserSessionEntity
    ]
  };
}
