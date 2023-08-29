import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  constructor(private location: Location) {
  }


  goBack(): void {
    this.location.back();
  }
}
