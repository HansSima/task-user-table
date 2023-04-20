import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { HttpClientModule } from '@angular/common/http';

import { reducer } from './shared/user.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, MainPageComponent, UserTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducer),
    StoreModule.forFeature('users', reducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
