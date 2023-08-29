import {Component, OnInit} from '@angular/core';
import {IEstablishment} from "../../../interfaces";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css']
})
export class UserFavoriteComponent implements OnInit{
  establishments: IEstablishment[] = [];
  currentPage = 1;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.me().subscribe((value) => {
      this.establishments = value.favorite;
    });
  }

  pageChanged(event: number): void {
    this.currentPage = event;
  }
}
