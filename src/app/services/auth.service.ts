import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import * as firebase from "firebase/app";

export interface User {
  isAuthenticated: boolean
  loginErrors?: any
  registrationErrors?: any
  token?: string
  data?: any
}

export interface AuthData {
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: BehaviorSubject<User>
  user: User = {
    isAuthenticated: false
  }
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.user$ = new BehaviorSubject(this.user)
   
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        this.user.loginErrors = null
        this.user.registrationErrors = null
        user.getIdToken()
        .then((token) => {
            this.user.isAuthenticated = true
            this.user.token = token
            this.user$.next(this.user)
          });
      } else {
        console.log('is not')
        this.user.isAuthenticated = false
        this.user$.next(this.user)
      }
    });
  }

  register(userData: AuthData) {

    const {
      email,
      password
    } = userData

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('res', res)
        this.router.navigate(['/'])
      })
      .catch((err) => {
        console.error('err -> ', err)
        this.user.registrationErrors = err
        this.user$.next(this.user)
      })

    this.user.isAuthenticated = true
    this.user$.next(this.user)
  }

  login(userData: AuthData) {

    const {
      email,
      password
    } = userData

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('res', res)
        this.router.navigate(['/'])
      })
      .catch((err) => {
        console.error('err -> ', err)
        this.user.loginErrors = err
        this.user$.next(this.user)
      })

    this.user.isAuthenticated = true
    this.user$.next(this.user)
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.user.isAuthenticated = false
      this.user$.next(this.user)
      this.router.navigate(['/'])
    })
  }
}
