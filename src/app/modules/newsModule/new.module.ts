import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {NewsComponent} from "./components/news/news.component";
import {NewComponent} from "./components/new/new.component";
import { NewDetailsComponent } from './components/new-details/new-details.component';
import { NewsOwnerComponent } from './components/news-owner/news-owner.component';
import { NewsDetailsOwnerComponent } from './news-details-owner/news-details-owner.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NewEditComponent } from './components/new-edit/new-edit.component';


@NgModule({
    declarations: [
        NewsPageComponent,
        NewsComponent,
        NewComponent,
        NewDetailsComponent,
        NewsOwnerComponent,
        NewsDetailsOwnerComponent,
        AddNewComponent,
        NewEditComponent,

    ],
    exports: [
        NewComponent
    ],
    imports: [
        CommonModule,
        NewRoutingModule,
      ReactiveFormsModule
    ]
})
export class NewModule { }
