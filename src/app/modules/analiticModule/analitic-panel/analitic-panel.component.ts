import { Component } from '@angular/core';

@Component({
  selector: 'app-analitic-panel',
  templateUrl: './analitic-panel.component.html',
  styleUrls: ['./analitic-panel.component.css']
})
export class AnaliticPanelComponent {
  value: number = 0;

  updateValue(): void {
    // Метод викликається при зміні значення інпуту
    // Ви можете додатково обробити дані або виконати інші дії залежно від потреб вашої програми
  }
}
