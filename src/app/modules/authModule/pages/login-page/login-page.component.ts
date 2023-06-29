import {Component} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  email: string;
  password: string;
  form:FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    const email = this.form.controls['email'].value;
    const password = this.form.controls['password'].value;
    this.authService.login(email, password).subscribe(
      (response) => {
        console.log('Успішний вхід', response);
      },
      (error) => {
        console.error('Помилка входу', error);
      }
    );
  }
}
