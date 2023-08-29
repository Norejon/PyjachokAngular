import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentRoutingModule } from './establishment-routing.module';
import { EstablishmentComponent } from './components/establishment/establishment.component';
import { EstablishmentsComponent } from './components/establishments/establishments.component';
import { EstablishmentPageComponent } from './pages/establishment-page/establishment-page.component';
import { EstablishmentDetailsComponent } from './components/establishment-details/establishment-details.component';
import { EstablishmentNewsComponent } from './components/establishment-news/establishment-news.component';
import {NewModule} from "../newsModule/new.module";
import { AddEstablishmentComponent } from './components/add-establishment/add-establishment.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GradeEstablishmentComponent } from './components/grade-establishment/grade-establishment.component';
import { ComplaintEstablishmentComponent } from './components/complaint-establishment/complaint-establishment.component';
import { DisactivatedEstablishmentsComponent } from './components/disactivated-establishments/disactivated-establishments.component';
import { EstablishmentEditComponent } from './components/establishment-edit/establishment-edit.component';
import {GradesOfEstablishmentComponent} from "../gradeModule/grades-of-establishment/grades-of-establishment.component";
import { EstablishmentDrinkersComponent } from './components/establishment-drinkers/establishment-drinkers.component';
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [
    EstablishmentComponent,
    EstablishmentsComponent,
    EstablishmentPageComponent,
    EstablishmentDetailsComponent,
    EstablishmentNewsComponent,
    AddEstablishmentComponent,
    GradeEstablishmentComponent,
    ComplaintEstablishmentComponent,
    DisactivatedEstablishmentsComponent,
    EstablishmentEditComponent,
    GradesOfEstablishmentComponent,
    EstablishmentDrinkersComponent
  ],
  exports: [
    EstablishmentComponent,
    GradesOfEstablishmentComponent
  ],
  imports: [
    CommonModule,
    EstablishmentRoutingModule,
    NewModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,

  ]
})
export class EstablishmentModule { }
