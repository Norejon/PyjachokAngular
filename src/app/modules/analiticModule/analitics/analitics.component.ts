import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IAnalitic } from "../../../interfaces";
import { AnaliticService } from "../../../services/analitic.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-analitics',
  templateUrl: './analitics.component.html',
  styleUrls: ['./analitics.component.css']
})
export class AnaliticsComponent implements OnInit{
  analitics: IAnalitic[];
  filteredAnalitics: IAnalitic[];
  startDate: string;
  endDate: string;
  chart: any;

  constructor(private analiticService:AnaliticService,private route:ActivatedRoute,private location:Location) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.analiticService.getAnaliticById(Number(id)).subscribe(value => {
      this.analitics = value;
      this.filteredAnalitics = this.analitics;
    });
  }

  filterAnalitics(): void {
    if (this.startDate && this.endDate) {
      this.filteredAnalitics = this.analitics.filter(analitic => {
        const analiticDate = new Date(analitic.date);
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
        return analiticDate >= start && analiticDate <= end;
      });
    } else {
      this.filteredAnalitics = this.analitics;
    }
  }

  goBack() {
    this.location.back();
  }
}
