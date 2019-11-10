import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

import { take, exhaustMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Intercepted request -> ', req.urlWithParams)

    return this.authService.user$.pipe(
      take(1),
      exhaustMap(user => {
        if (user.isAuthenticated) {
          const newRequest = req.clone({
            params: new HttpParams().set('auth', user.token)
          })
  
          return next.handle(newRequest)
        }

        return next.handle(req)
      })
    )
  }
}
