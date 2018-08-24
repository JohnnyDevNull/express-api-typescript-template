import { User } from './user';

export interface UserGroup {
  id: Number;
  name: String;
  users?: User[];
}
