import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EstablishmentPageComponent} from "./pages/establishment-page/establishment-page.component";

const routes: Routes = [
  {path:'',component:EstablishmentPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentRoutingModule { }
