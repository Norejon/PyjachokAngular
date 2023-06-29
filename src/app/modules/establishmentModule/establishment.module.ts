import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentRoutingModule } from './establishment-routing.module';
import { EstablishmentComponent } from './components/establishment/establishment.component';
import { EstablishmentsComponent } from './components/establishments/establishments.component';
import { EstablishmentPageComponent } from './pages/establishment-page/establishment-page.component';


@NgModule({
  declarations: [
    EstablishmentComponent,
    EstablishmentsComponent,
    EstablishmentPageComponent
  ],
  imports: [
    CommonModule,
    EstablishmentRoutingModule
  ]
})
export class EstablishmentModule { }
