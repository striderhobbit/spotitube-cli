import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthLookupComponent } from './auth-lookup/auth-lookup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'auth', redirectTo: 'auth/lookup' },
  { path: 'auth/lookup', component: AuthLookupComponent },
  { path: 'auth/login', component: AuthLoginComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
