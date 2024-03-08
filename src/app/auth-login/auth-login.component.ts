import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  password: string = '1234';

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(): void {
    this.apiService.authLogin(this.password).subscribe({
      next: () => this.router.navigate(['user']),
      error: (error) => {
        switch (error.status) {
          case HttpStatusCode.Forbidden: {
            alert('wrong password');
            break;
          }
          case HttpStatusCode.NotFound:
          case HttpStatusCode.Unauthorized: {
            this.router.navigate(['auth']);
          }
        }
      },
    });
  }
}
