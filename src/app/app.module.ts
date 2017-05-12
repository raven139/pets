import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AllUsersComponent } from './all-users/all-users.component';
import { SingleUserComponent } from './single-user/single-user.component';

import { AppRouteModule } from './app-route.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule
  ],
  declarations: [
    AppComponent,
    AllUsersComponent,
    SingleUserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
