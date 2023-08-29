import {Component, Input, OnInit} from '@angular/core';
import {IEstablishment, IGrade} from "../../../../interfaces";
import {EstablishmentService} from "../../../../services/establishment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-establishment-drinkers',
  templateUrl: './establishment-drinkers.component.html',
  styleUrls: ['./establishment-drinkers.component.css']
})
export class EstablishmentDrinkersComponent implements OnInit{

  establishment: IEstablishment;
  grades:IGrade[];

  constructor(private establishmentService:EstablishmentService, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.establishmentService.getById(Number(id)).subscribe((value) => {
        this.establishment = value;
        console.log(value);
      });
    }
  }

}
