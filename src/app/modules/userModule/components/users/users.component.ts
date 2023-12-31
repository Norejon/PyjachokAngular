import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services";
import {IUser} from "../../../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users:IUser[]
  currentPage = 1;

constructor(private userService:UserService) {
}

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users=value)
  }

  pageChanged(event: number): void {
    this.currentPage = event;
  }
}
