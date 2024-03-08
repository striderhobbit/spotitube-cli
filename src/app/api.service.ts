import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthControllerParams } from '@shared/controllers/auth';
import { UserControllerParams } from '@shared/controllers/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  authLookup<T extends AuthControllerParams.Lookup['ResBody']>(
    id: string
  ): Observable<T> {
    return this.httpClient
      .post<T>('api/auth/lookup', { id })
      .pipe(tap(({ code }) => sessionStorage.setItem('code', code)));
  }

  authLogin<T extends AuthControllerParams.Login['ResBody']>(
    password: string
  ): Observable<T> {
    return this.httpClient
      .post<T>(
        'api/auth/login',
        { password },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${sessionStorage.getItem('code')}`,
          }),
        }
      )
      .pipe(
        tap(({ access_token }) =>
          sessionStorage.setItem('access_token', access_token)
        )
      );
  }

  getUser<T extends UserControllerParams.Get['ResBody']>(): Observable<T> {
    return this.httpClient.get<T>(`api/user`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      }),
    });
  }
}
