import {Component, OnInit} from '@angular/core';
import {INews} from "../../../../interfaces";
import {NewService} from "../../../../services/new.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: INews[];

  constructor(private newService: NewService) {
  }

  ngOnInit(): void {
    this.newService.getAll().subscribe(value => this.news = value);
  }

}
