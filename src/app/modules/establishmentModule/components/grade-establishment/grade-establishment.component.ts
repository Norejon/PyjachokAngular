import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {GradeService} from "../../../../services/grade.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-grade-establishment',
  templateUrl: './grade-establishment.component.html',
  styleUrls: ['./grade-establishment.component.css']
})
export class GradeEstablishmentComponent {

  form:FormGroup;
  constructor(private route:ActivatedRoute,private gradeService:GradeService,private location:Location) {
    this.form = new FormGroup({
      grade: new FormControl(),
      text: new FormControl()
    });
  }

  addGrade() {
    const id = this.route.snapshot.paramMap.get('id');
    const grade= Number(this.form.value.grade);
    const text = this.form.value.text;
    this.gradeService.addGrade(Number(id),grade,text).subscribe(
      (response) => {
        console.log('Успішно додано', response);
        this.location.back();
      },
      (error) => {
        console.error('Помилка додавання', error);
      }
    );
  }
  goBack() {
    this.location.back();
  }
}
