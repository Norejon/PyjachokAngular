import {Component, OnInit} from '@angular/core';
import {IGrade} from "../../../interfaces";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-user-grades',
  templateUrl: './user-grades.component.html',
  styleUrls: ['./user-grades.component.css']
})
export class UserGradesComponent implements OnInit{

  grades: IGrade[] = [];
  currentPage = 1;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.me().subscribe((value) => {
      this.grades = value.gradesList;
    });
  }

  pageChanged(event: number): void {
    this.currentPage = event;
  }

}
