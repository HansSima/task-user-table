import { User } from './../../models/user';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersDataService } from 'src/app/shared/users-data.service';
import * as fromReducer from '../../shared/user.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  //User observable
  users$!: Observable<User[]>;

  //Inject Services
  usersService = inject(UsersDataService);
  store = inject(Store<fromReducer.State>);

  ngOnInit(): void {
    this.getUsersObservable();
  }

  /**
   * @description Get user data from store
   */
  getUsersObservable() {
    this.usersService.getUsersList();
    this.users$ = this.store.select(fromReducer.getUsers);
  }
}
