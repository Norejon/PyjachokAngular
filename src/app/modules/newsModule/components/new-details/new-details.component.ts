import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {INews, IUser} from "../../../../interfaces";
import {NewService} from "../../../../services/new.service";
import {AuthService} from "../../../../services/auth.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.css']
})
export class NewDetailsComponent implements OnInit {

  new: INews
  user: IUser;
  showConfirm = false;

  constructor(private route: ActivatedRoute, private newService: NewService, private authService: AuthService, private location: Location) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.newService.getById(Number(id)).subscribe((value) => {
        this.new = value;
      });
      this.authService.me().subscribe((value) => {
        this.user = value
      });
    }
  }

  deleteNew() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.newService.deleteNew(Number(id)).subscribe(
        (response) => {
          console.log('Успішний видалено', response);
        },
        (error) => {
          console.error('Помилка видалення', error);
        }
      );
    }
  }

  goBack() {
    this.location.back();
  }

  confirmDelete(): void {
    this.showConfirm = true;
  }

  hideConfirm(): void {
    this.showConfirm = false;
  }
}
