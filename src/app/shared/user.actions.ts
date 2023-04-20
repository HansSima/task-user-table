import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const SET_USERS = '[users] Set Users';

export class SetUsers implements Action {
  readonly type = SET_USERS;

  constructor(public payload: User[]) {}
}

export type UsersActions = SetUsers;
