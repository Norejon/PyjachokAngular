import {Component, Input} from '@angular/core';
import {IAnalitic} from "../../../interfaces";

@Component({
  selector: 'app-analitic',
  templateUrl: './analitic.component.html',
  styleUrls: ['./analitic.component.css']
})
export class AnaliticComponent {
  @Input()
  analitic: IAnalitic;

  constructor() {
  }
}
