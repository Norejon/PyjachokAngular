import {Component, OnInit} from '@angular/core';
import {INews} from "../../../../interfaces";
import {NewService} from "../../../../services/new.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-establishment-news',
  templateUrl: './establishment-news.component.html',
  styleUrls: ['./establishment-news.component.css']
})
export class EstablishmentNewsComponent implements OnInit {
  news: INews[]

  constructor(private newService: NewService,private route:ActivatedRoute,private location:Location) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.newService.getNewsOfEstablishment(Number(id)).subscribe(value => this.news = value);
    }
  }

  goBack() {
    this.location.back();
  }
}
