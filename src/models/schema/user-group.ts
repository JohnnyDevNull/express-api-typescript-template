import { EntitySchema } from 'typeorm';
import { UserGroup } from '../entity/user-group';

export const UserGroupEntity = new EntitySchema<UserGroup>({
  name: 'UserGroup',
  tableName: 'core_user_group',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
      unsigned: true
    },
    name: {
      type: String,
      length: 100
    }
  },
  relations: {
    users: {
      type: 'many-to-many',
      target: 'User',
      inverseSide: 'groups'
    }
  }
});
