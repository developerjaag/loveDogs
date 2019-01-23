import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authS: AuthService
  ) {
    this.formLogin = this.validartorsFormLogin();
  }

  ngOnInit() {}

  validartorsFormLogin() {
    return this.formBuilder.group({
      input_email: ['', [Validators.required, Validators.email]],
      input_password: ['', Validators.required]
    });
  } // end validartorsFormLogin

  login() {
    const email = this.formLogin.value.input_email;
    const password = this.formLogin.value.input_password;
    this.authS.loginEmailPassword(email, password);
  } // end login
}
