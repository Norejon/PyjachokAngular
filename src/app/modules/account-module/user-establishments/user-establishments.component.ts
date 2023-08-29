import {Component, OnInit} from '@angular/core';
import {EstablishmentService} from "../../../services/establishment.service";
import {IEstablishment} from "../../../interfaces";

@Component({
  selector: 'app-user-establishments',
  templateUrl: './user-establishments.component.html',
  styleUrls: ['./user-establishments.component.css']
})
export class UserEstablishmentsComponent implements OnInit {

  establishments: IEstablishment[];
  currentPage = 1;

  constructor(private establishmentService: EstablishmentService) {
  }

  ngOnInit(): void {
    this.establishmentService.getOfUser().subscribe(value => this.establishments = value)
  }

  pageChanged(event: number): void {
    this.currentPage = event;
  }
}
