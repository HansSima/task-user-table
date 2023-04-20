import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit, OnDestroy {
  // Get users observable
  @Input() users$!: Observable<User[]>;
  userSubscription!: Subscription;

  // Users data array
  public users!: User[];

  ngOnInit(): void {
    this.subscribeUsers();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  /**
   * @description Subscribe user data
   */
  subscribeUsers() {
    this.users$.subscribe({
      next: (user) => (this.users = user),
      error: (err) => console.error('An error occurred', err),
      complete: () => console.log('No more users'),
    });
  }
}
