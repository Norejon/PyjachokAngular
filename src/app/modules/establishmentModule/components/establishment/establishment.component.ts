import {Component, Input} from '@angular/core';
import {IEstablishment} from "../../../../interfaces";

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent {
@Input()
  establishment:IEstablishment;
constructor() {
}
  getStarsArray(rating: number): number[] {
    return Array.from({ length: Math.floor(rating) }, (_, index) => index + 1);
  }
}
