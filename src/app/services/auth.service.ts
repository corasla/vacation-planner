import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router';

export interface User {
  isAuthenticated: boolean,
  data?: any
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: BehaviorSubject<User>
  user: User = {
    isAuthenticated: true
  }
  constructor(
    private router: Router
  ) {
    this.user$ = new BehaviorSubject(this.user)
  }

  login() {
    this.user.isAuthenticated = true
    this.user$.next(this.user)
  }

  logout() {
    this.user.isAuthenticated = false
    this.user$.next(this.user)
    this.router.navigate(['/'])
  }
}
