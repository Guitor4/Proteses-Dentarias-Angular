import { Injectable } from '@angular/core';
import { UserSession } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public localStorage = localStorage;
  constructor(private router: Router) {}

  setUserInfo(data: UserSession): void {
    this.localStorage.setItem('userInfo', JSON.stringify(data));
  }

  clearUserInfo(): void {
    this.localStorage.clear();
  }

  getUserInfo(): UserSession {
    const userInfo = this.localStorage.getItem('userInfo');
    if (!userInfo) this.router.navigate(['login']);
    return JSON.parse(userInfo!);
  }
}
