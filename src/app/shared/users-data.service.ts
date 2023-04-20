import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import * as fromReducer from './user.reducer';
import { Store } from '@ngrx/store';
import * as Users from './user.actions';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  // Endpoint URL
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

  //Inject Services
  http = inject(HttpClient);
  store = inject(Store<fromReducer.State>);

  /**
   * @description Get user data from BE and save them in store
   */
  getUsersList() {
    this.http.get<User[]>(this.apiUrl).subscribe((users: User[]) => {
      this.store.dispatch(new Users.SetUsers(users));
    });
  }
}
