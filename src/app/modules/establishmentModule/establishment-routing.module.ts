import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EstablishmentPageComponent} from "./pages/establishment-page/establishment-page.component";
import {
  DisactivatedEstablishmentsComponent
} from "./components/disactivated-establishments/disactivated-establishments.component";
import {EstablishmentDetailsComponent} from "./components/establishment-details/establishment-details.component";
import {EstablishmentEditComponent} from "./components/establishment-edit/establishment-edit.component";
import {EstablishmentNewsComponent} from "./components/establishment-news/establishment-news.component";
import {PyjachokFormComponent} from "../pyjachokModule/components/pyjachok-form/pyjachok-form.component";
import {GradeEstablishmentComponent} from "./components/grade-establishment/grade-establishment.component";
import {ComplaintEstablishmentComponent} from "./components/complaint-establishment/complaint-establishment.component";
import {AnaliticsComponent} from "../analiticModule/analitics/analitics.component";
import {GradesOfEstablishmentComponent} from "../gradeModule/grades-of-establishment/grades-of-establishment.component";


const routes: Routes = [
  {path: '', component: EstablishmentPageComponent},
  {path: 'disactivated', component: DisactivatedEstablishmentsComponent},
  {path: 'disactivated/:id', component: EstablishmentDetailsComponent},
  {path: 'disactivated/:id/news', component: EstablishmentNewsComponent},
  {path: 'disactivated/:id/grades', component: GradeEstablishmentComponent},
  {path: 'disactivated/:id/edit', component: EstablishmentEditComponent},
  {path: 'disactivated/:id/analitic', component: AnaliticsComponent},

  {path: ':id', component: EstablishmentDetailsComponent},
  {path: ':id/edit', component: EstablishmentEditComponent},
  {path: ':id/news', component: EstablishmentNewsComponent},
  {path: ':id/drinker', component: PyjachokFormComponent},
  {path: ':id/grade', component: GradeEstablishmentComponent},
  {path: ':id/grades', component: GradesOfEstablishmentComponent },
  {path: ':id/complaint', component: ComplaintEstablishmentComponent},
  {path: ':id/analitic', component: AnaliticsComponent},
  {path: ':id/news/:id', redirectTo: "/news/:id"},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentRoutingModule {
}
