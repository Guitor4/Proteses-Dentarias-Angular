import { Injectable } from '@angular/core';
import { IUser, UserSession } from 'app/shared/models/user.model';
import { ApiService } from '../../core/http/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  public login(loginInfo: Pick<IUser, 'username' | 'password'>): Observable<UserSession> {
    return this.apiService.login(loginInfo);
  }
}
