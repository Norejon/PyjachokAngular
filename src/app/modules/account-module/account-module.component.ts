import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services";

@Component({
  selector: 'app-account-module',
  templateUrl: './account-module.component.html',
  styleUrls: ['./account-module.component.css']
})
export class AccountModuleComponent implements OnInit{

  user:IUser
  showConfirm = false;

  constructor(private authService:AuthService,private userService:UserService) {
  }

  ngOnInit(): void {
    this.authService.me().subscribe(value => this.user=value);
  }

  deleteAccount() {
    const id = this.user.id;
    if (id) {
      this.userService.deleteUser(Number(id)).subscribe(
        () => {
          console.log('Успішно видалено');
        },
        (error) => {
          console.error('Помилка видалення', error);
        }
      );
    }
  }
  logout(): void {
    this.userService.logout().subscribe(
      () => {
        console.log('Успішний вихід');
      },
      (error) => {
        console.error('Помилка виходу', error);
      }
    );
  }

  confirmDelete(): void {
    this.showConfirm = true;
  }

  hideConfirm(): void {
    this.showConfirm = false;
  }
}
