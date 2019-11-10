import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {
  registrationForm: FormGroup
  errors = false

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    })

    this.authService.user$.subscribe((userData) => {
      this.errors = !!userData.registrationErrors
    })
  }

  register() {
    this.authService.register(this.registrationForm.value)
  }
}
