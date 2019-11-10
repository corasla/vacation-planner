import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.sass']
})
export class AuthFormComponent implements OnInit {
  loginForm: FormGroup
  errors = false

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    })

    this.loginForm.valueChanges.subscribe(() => {
      // console.log('maybe it changed! -> ', this.loginForm.value)
    })

    this.authService.user$.subscribe((userData) => {
      this.errors = !!userData.loginErrors
    })
  }

  login() {
    console.log(this.loginForm)
    this.authService.login(this.loginForm.value)
  }

}
