import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {NewDetailsComponent} from "./components/new-details/new-details.component";
import {NewEditComponent} from "./components/new-edit/new-edit.component";

const routes: Routes = [
  { path: '', component: NewsPageComponent },
  { path: ':id', component: NewDetailsComponent },
  {path:':id/edit', component: NewEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }
