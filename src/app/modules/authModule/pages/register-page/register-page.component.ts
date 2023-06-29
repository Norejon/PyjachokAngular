import { Component } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  email: string;
  password: string;
  username: string;
  form:FormGroup;

 constructor(private authService:AuthService) {
 }
  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    });
  }

  register() {
    const email = this.form.controls['email'].value;
    const password = this.form.controls['password'].value;
    const username = this.form.controls['username'].value;
    this.authService.register(email, password,username).subscribe(
      (response) => {
        console.log('Успішна реєстрація', response);
      },
      (error) => {
        console.error('Помилка реєстрації', error);
      }
    );
  }
}
