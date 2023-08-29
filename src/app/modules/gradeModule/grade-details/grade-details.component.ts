import {Component, Input, OnInit} from '@angular/core';
import {IGrade} from "../../../interfaces";

@Component({
  selector: 'app-grade-details',
  templateUrl: './grade-details.component.html',
  styleUrls: ['./grade-details.component.css']
})
export class GradeDetailsComponent implements OnInit{

  @Input()
  grade:IGrade


  ngOnInit(): void {
    console.log(this.grade)
  }
}
