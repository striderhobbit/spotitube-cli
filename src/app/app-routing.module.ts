import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth0Component } from './auth0/auth0.component';
import { Auth1Component } from './auth1/auth1.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'auth', redirectTo: 'auth/0' },
  { path: 'auth/0', component: Auth0Component },
  { path: 'auth/1', component: Auth1Component },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
