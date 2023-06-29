import {Component, OnInit} from '@angular/core';
import {EstablishmentService} from "../../../../services/establishment.service";
import {IEstablishment} from "../../../../interfaces";

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.css']
})
export class EstablishmentsComponent implements OnInit {

  establishments: IEstablishment[];

  constructor(private establishmentService: EstablishmentService) {
  }

  ngOnInit(): void {
    this.establishmentService.getAll().subscribe(value => this.establishments=value);
  }

}
