import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private http: HttpClient) { }

  path = environment.api;

  save(user: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>(this.path + '/user/signup', user);
  }

  userExists(userName: string): Observable<boolean>{
    return this.http.get<boolean>(`${this.path}/user/exists/${userName}`);
  }


}
