import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { UsersDataService } from './users-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';

describe('UsersDataService', () => {
  let service: UsersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule],
      providers: [provideMockStore({})],
    }).compileComponents();

    service = TestBed.inject(UsersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
