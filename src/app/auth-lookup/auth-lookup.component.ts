import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-auth-lookup',
  templateUrl: './auth-lookup.component.html',
  styleUrls: ['./auth-lookup.component.scss'],
})
export class AuthLookupComponent {
  id: string = 'foobar';

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(): void {
    this.apiService.authLookup(this.id).subscribe({
      next: () => this.router.navigate(['auth/login']),
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
