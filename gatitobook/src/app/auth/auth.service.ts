import { UserService } from './user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private service: UserService) { }

  authenticate(user: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: user, password
    },
      { observe: 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.service.saveToken(authToken);
      })
    )

      ;
  }
}
