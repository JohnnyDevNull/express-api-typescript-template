import { User } from './user';

export interface UserSession {
  id: number;
  token: string;
  data: string;
  user?: User;
}
