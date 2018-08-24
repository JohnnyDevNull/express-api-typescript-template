import { UserGroup } from './user-group';
import { UserSession } from './user-session';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  userName: string;
  password?: string;
  email?: string;
  createdAt?: Date;
  updateAt?: Date;
  activated?: boolean;
  activatedAt?: Date;
  locked?: boolean;
  lockedAt?: Date;
  session?: UserSession;
  groups?: UserGroup[];
}
