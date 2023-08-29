import {Component, Input} from '@angular/core';
import {IDrinker} from "../../../../interfaces";
import {PyjachokService} from "../../../../services/pyjachok.service";

@Component({
  selector: 'app-drinker',
  templateUrl: './drinker.component.html',
  styleUrls: ['./drinker.component.css']
})
export class DrinkerComponent {

  @Input()
  drinker:IDrinker

  constructor(private pyjachokService:PyjachokService) {
  }

  deleteDrinker() {
    const id= this.drinker.id;
    if(id){
      this.pyjachokService.deleteDrinker(id).subscribe(
        (response) => {
          console.log('Успішно видалено', response);
        },
        (error) => {
          console.error('Помилка видалення', error);
        }
      );
    }
  }
}
