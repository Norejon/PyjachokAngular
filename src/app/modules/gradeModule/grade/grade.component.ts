import {Component, Input} from '@angular/core';
import {IGrade} from "../../../interfaces";
import {GradeService} from "../../../services/grade.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent {

  @Input()
  grade:IGrade
  showConfirm = false;

  constructor(private gradeService:GradeService,private location:Location) {
  }

  deleteGrade() {
    const id = this.grade.id;
    if (id) {
      this.gradeService.deleteGrade(Number(id)).subscribe(
        (response) => {
          this.location.back();
          console.log('Успішний видалено', response);
        },
        (error) => {
          console.error('Помилка видалення', error);
        }
      );
    }
  }
  confirmDelete(): void {
    this.showConfirm = true;
  }

  hideConfirm(): void {
    this.showConfirm = false;
  }

}
