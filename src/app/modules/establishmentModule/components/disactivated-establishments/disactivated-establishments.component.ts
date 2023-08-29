import {Component, OnInit} from '@angular/core';
import {IEstablishment} from "../../../../interfaces";
import {EstablishmentService} from "../../../../services/establishment.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-disactivated-establishments',
  templateUrl: './disactivated-establishments.component.html',
  styleUrls: ['./disactivated-establishments.component.css']
})
export class DisactivatedEstablishmentsComponent implements OnInit {

  establishments: IEstablishment[]
  currentPage = 1;

  constructor(private establishmentService:EstablishmentService,private location:Location) {
  }

  ngOnInit(): void {
    this.establishmentService.getDesActivated().subscribe(value => this.establishments = value);
  }


  goBack() {
    this.location.back();
  }
  pageChanged(event: number): void {
    this.currentPage = event;
  }
}
