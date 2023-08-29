import {Component, OnInit} from '@angular/core';
import {IGrade} from "../../../interfaces";
import {GradeService} from "../../../services/grade.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit{

  grades:IGrade[];
  currentPage =1;

  constructor(private gradeService:GradeService,private location:Location) {
  }

  ngOnInit(): void {
    this.gradeService.getAll().subscribe(value => this.grades = value);
  }

  pageChanged(event: number): void {
    this.currentPage = event;
  }

  goBack() {
    this.location.back();
  }
}
