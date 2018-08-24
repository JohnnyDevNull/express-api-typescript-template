import { EntitySchema } from 'typeorm';
import { User } from '../entity/user';

export const UserEntity = new EntitySchema<User>({
  name: 'User',
  tableName: 'core_user',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
      unsigned: true
    },
    firstName: {
      type: String,
      length: 200
    },
    lastName: {
      type: String,
      length: 200
    },
    userName: {
      type: String,
      length: 200
    },
    password: {
      type: String,
      length: 64
    },
    email: {
      type: String,
      length: 200
    },
    createdAt: {
      type: Date,
      createDate: true
    },
    updateAt: {
      type: Date,
      updateDate: true
    },
    activated: {
      type: Boolean,
      width: 1,
      unsigned: true
    },
    activatedAt: {
      type: Date
    },
    locked: {
      type: Boolean,
      width: 1,
      unsigned: true
    },
    lockedAt: {
      type: Date
    }
  },
  relations: {
    session: {
      target: 'UserSession',
      type: 'one-to-one',
      cascade: true,
      inverseSide: 'user'
    },
    groups: {
      target: 'UserGroup',
      type: 'many-to-many',
      joinTable: { name: 'core_user_group_map' },
      cascade: true,
      inverseSide: 'users'
    }
  }
});
