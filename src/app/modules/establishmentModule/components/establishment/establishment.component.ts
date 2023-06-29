import {Component, Input} from '@angular/core';
import {IEstablishment} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent {
@Input()
  establishment:IEstablishment;
constructor(private router:Router, private activatedRoute:ActivatedRoute) {
}
}
