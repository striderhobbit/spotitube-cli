import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Auth0Component } from './auth0/auth0.component';
import { UserComponent } from './user/user.component';
import { Auth1Component } from './auth1/auth1.component';

@NgModule({
  declarations: [AppComponent, Auth0Component, UserComponent, Auth1Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
