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

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  register() {
    console.log(this.registrationForm)
    this.authService.login()
  }
}
