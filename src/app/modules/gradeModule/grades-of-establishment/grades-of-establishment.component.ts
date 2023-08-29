import {Component, Input, OnInit} from '@angular/core';
import {IEstablishment, IGrade, IUser} from "../../../interfaces";
import {EstablishmentService} from "../../../services/establishment.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {GradeService} from "../../../services/grade.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-grades-of-establishment',
  templateUrl: './grades-of-establishment.component.html',
  styleUrls: ['./grades-of-establishment.component.css']
})
export class GradesOfEstablishmentComponent implements OnInit{

  establishment: IEstablishment;
  showDetails: { [key: number]: boolean } = {};
  user: IUser;
  isOwner: boolean;
  selectedGrade: IGrade;
  showConfirm = false;

  constructor(
    private establishmentService: EstablishmentService,
    private route: ActivatedRoute,
    private location: Location,
    private gradeService: GradeService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.establishmentService.getById(Number(id)).subscribe((value) => {
      this.establishment = value;

      this.authService.me().subscribe((user) => {
        this.user = user;

        this.isOwner = this.establishment?.gradesList?.some(grade =>
          this.user?.gradesList?.some(userGrade => userGrade.id === grade.id)
        );
      });
    });
  }

  toggleDetails(gradeId: number) {
    this.showDetails[gradeId] = !this.showDetails[gradeId];
  }

  goBack(): void {
    this.location.back();
  }

  isOwnerGrade(grade: IGrade): boolean {
    if (!this.user || !this.user.gradesList) {
      return false;
    }

    return this.user.gradesList.some(userGrade => userGrade.id === grade.id);
  }

  deleteGrade() {
    const id = this.establishment.id;
    if (id) {
      this.gradeService.deleteGrade(Number(id)).subscribe(
        (response) => {
          console.log('Успішний видалено', response);
          this.location.back();
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







