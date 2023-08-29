import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopModuleComponent} from "./top-module.component";

const routes: Routes = [
  { path: '', redirectTo: 'restaurant', pathMatch: 'full' },
  { path: 'restaurant', component: TopModuleComponent },
  { path: 'bar', component: TopModuleComponent },
  { path: 'cafe', component: TopModuleComponent },
  { path: 'pizzeria', component: TopModuleComponent },
  {path: ':type/:id', redirectTo: '/establishments/:id'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopRoutingModule { }
