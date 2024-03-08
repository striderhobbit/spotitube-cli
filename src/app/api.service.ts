import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from '@shared/schema/request';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly httpClient: HttpClient) {}

  auth0<T extends Request.PostAuth0['ResBody']>(id: string): Observable<T> {
    return this.httpClient
      .post<T>('api/auth/0', { id })
      .pipe(tap(({ code }) => sessionStorage.setItem('code', code)));
  }

  auth1<T extends Request.PostAuth1['ResBody']>(
    password: string
  ): Observable<T> {
    return this.httpClient
      .post<T>(
        'api/auth/1',
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

  getUser<T extends Request.GetUser['ResBody']>(): Observable<T> {
    return this.httpClient.get<T>(`api/user`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      }),
    });
  }
}
