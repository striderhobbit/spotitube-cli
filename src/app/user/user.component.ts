import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublicUser } from '@shared/schema/user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user?: PublicUser;

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getUser().subscribe({
      next: (user) => (this.user = user),
      error: (error) => {
        switch (error.status) {
          case HttpStatusCode.Unauthorized: {
            this.router.navigate(['auth']);
          }
        }
      },
    });
  }
}
