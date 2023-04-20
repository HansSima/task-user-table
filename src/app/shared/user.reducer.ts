import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersActions, SET_USERS } from './user.actions';
import { User } from '../models/user';

export interface State {
  users: User[];
}

const initialState: State = {
  users: [],
};

export function reducer(state = initialState, action: UsersActions) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}

export const getUsersState = createFeatureSelector<State>('users');

export const getUsers = createSelector(getUsersState, (state: State) => {
  return state.users;
});
