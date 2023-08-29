import { Component } from '@angular/core';
import {INews, IUser} from "../../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {NewService} from "../../../services/new.service";
import {AuthService} from "../../../services/auth.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-news-details-owner',
  templateUrl: './news-details-owner.component.html',
  styleUrls: ['./news-details-owner.component.css']
})
export class NewsDetailsOwnerComponent {


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
          this.location.back();
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

