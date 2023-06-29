import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {NewsComponent} from "./components/news/news.component";
import {NewComponent} from "./components/new/new.component";


@NgModule({
  declarations: [
    NewsPageComponent,
    NewsComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule
  ]
})
export class NewModule { }
