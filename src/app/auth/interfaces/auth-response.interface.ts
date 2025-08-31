import { User } from './user.interface';
import { UserLogin } from './userLogin.interface';

export interface AuthResponse {
  user: User;
  token: string;
}
