import { EntitySchema } from 'typeorm';
import { UserSession } from '../entity/user-session';

export const UserSessionEntity = new EntitySchema<UserSession>({
  name: 'UserSession',
  tableName: 'core_user_session',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
      unsigned: true
    },
    token: {
      type: String
    },
    data: {
      type: String,
    },
  },
  relations: {
    user: {
      target: 'User',
      type: 'one-to-one',
      inverseSide: 'session',
      joinColumn: true
    }
  }
});
