import {Component, OnInit} from '@angular/core';
import {IDrinker} from "../../../interfaces";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-user-drinkers',
  templateUrl: './user-drinkers.component.html',
  styleUrls: ['./user-drinkers.component.css']
})
export class UserDrinkersComponent implements OnInit {

  drinkers: IDrinker[]
  currentPage = 1;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    console.log(this.authService.me().subscribe(value => console.log(value.drinkers)));
    this.authService.me().subscribe(value => this.drinkers = value.drinkers);
  }


  pageChanged(event: number): void {
    this.currentPage = event;
  }
}
