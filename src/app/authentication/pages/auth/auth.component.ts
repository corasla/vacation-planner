import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  isOnLoginPage = true
  constructor() { }

  ngOnInit() {

  }

  toggleForm() {
    this.isOnLoginPage = !this.isOnLoginPage
  }
}
