import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-auth1',
  templateUrl: './auth1.component.html',
  styleUrls: ['./auth1.component.scss'],
})
export class Auth1Component {
  password: string = '1234';

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(): void {
    this.apiService.auth1(this.password).subscribe({
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
