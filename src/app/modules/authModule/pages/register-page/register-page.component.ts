import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../../../interfaces";
import {UserService} from "../../../../services";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements  OnInit{

  form: FormGroup;
  emails:string[];
  nicknames:string[];
  uniqueE: boolean;
  uniqueN: boolean;

  constructor(private authService: AuthService,private userService:UserService) { }

  ngOnInit(): void {
    this.initForm();

    this.userService.getAll().subscribe((value: IUser[]) => {
      this.emails = value.map(user => user.email);
    });

    this.userService.getAll().subscribe((value: IUser[]) => {
      this.nicknames = value.map(user => user.nickname);
    });

  }

  private initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      nickname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      birth: new FormControl('', [Validators.required, ]),
      gender: new FormControl('', [Validators.required])
    });
  }

  uniqueEmail():void{
    if(this.emails.includes(this.form.controls['email'].value)){
      this.uniqueE=true;
    }else {
      this.uniqueE=false;
    }
  }
  uniqueNickname():void{
    if(this.nicknames.includes(this.form.controls['nickname'].value)){
      this.uniqueN=true;
    }else {
      this.uniqueN=false;
    }
  }

  register(): void {
    const email = this.form.controls['email'].value;
    const password = this.form.controls['password'].value;
    const nickname = this.form.controls['nickname'].value;
    const birth = this.form.controls['birth'].value;
    const gender = this.form.controls['gender'].value;

    this.authService.register(email, password, nickname, birth, gender).subscribe(
      (response) => {
        console.log('Успішна реєстрація', response);
      },
      (error) => {
        console.error('Помилка реєстрації', error);
      }
    );
  }
}

