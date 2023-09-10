/*
https://docs.nestjs.com/providers#services
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, UserSession } from 'app/shared/models/user.model';
import { endpoints } from './endpoints';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  //Área de autenticação
  public login(loginInfo: Pick<IUser, 'username' | 'password'>): Observable<UserSession> {
    return this.http.post<UserSession>(`${endpoints.LOGIN}`, loginInfo);
  }
}
