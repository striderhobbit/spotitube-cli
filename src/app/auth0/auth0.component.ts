import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-auth0',
  templateUrl: './auth0.component.html',
  styleUrls: ['./auth0.component.scss'],
})
export class Auth0Component {
  id: string = 'foobar';

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(): void {
    this.apiService.auth0(this.id).subscribe({
      next: () => this.router.navigate(['auth/1']),
      error: (error) => {
        switch (error.status) {
          case HttpStatusCode.NotFound: {
            alert('no such user');
          }
        }
      },
    });
  }
}
