import {Component, OnInit} from '@angular/core';
import {IEstablishment} from "../../interfaces";
import {TopService} from "../../services/top.service";

@Component({
  selector: 'app-top-module',
  templateUrl: './top-module.component.html',
  styleUrls: ['./top-module.component.css']
})
export class TopModuleComponent implements OnInit{
  establishments:IEstablishment[]
  constructor(private topService:TopService) {
  }
  ngOnInit(): void {
    this.topService.getTop().subscribe(value => this.establishments=value);
  }

}
