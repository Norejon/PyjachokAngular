import {Component, Input} from '@angular/core';
import {INews} from "../../../../interfaces";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  @Input()
  new:INews

}
