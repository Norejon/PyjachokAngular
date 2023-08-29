import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {IUser} from "../../../../interfaces";
import {UserService} from "../../../../services";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  currentUser: IUser;
  id:number;
  nicknames:string[];
  uniqueN:boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,private userService:UserService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      birth: ['', Validators.required],
      gender: ['', Validators.required],
      nickname: ['', Validators.required]
    });
    this.authService.me().subscribe(value => this.id=value.id);

    this.userService.getAll().subscribe((value: IUser[]) => {
      this.nicknames = value.map(user => user.nickname);
    });

    this.getCurrentUser();
  }

  uniqueNickname():void{
    if(this.nicknames.includes(this.userForm.controls['nickname'].value)){
      this.uniqueN=true;
    }else {
      this.uniqueN=false;
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      const birth = this.userForm.get('birth')?.value;
      const gender = this.userForm.get('gender')?.value;
      const nickname = this.userForm.get('nickname')?.value;
      const id = this.id;

      this.userService.updateUser(id,birth,gender,nickname).subscribe(
        (response: any) => {
          console.log('User updated successfully:', response);
        },
        (error: any) => {
          console.error('Error updating user:', error);
        }
      );

    }
  }

  private getCurrentUser() {
    this.authService.me().subscribe(
      (user: IUser) => {
        this.currentUser = user;
        this.setUserFormValues();
      },
      (error: any) => {
        console.error('Помилка отримання поточного користувача:', error);
      }
    );
  }

  private setUserFormValues() {
    if (this.currentUser) {
      this.userForm.patchValue({
        email: this.currentUser.email,
        birth: this.currentUser.birth,
        gender: this.currentUser.gender,
        nickname: this.currentUser.nickname
      });
    }
  }
}






