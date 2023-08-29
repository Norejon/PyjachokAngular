import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountModuleComponent} from "./account-module.component";
import {UserEstablishmentsComponent} from "./user-establishments/user-establishments.component";
import {
  AddEstablishmentComponent
} from "../establishmentModule/components/add-establishment/add-establishment.component";
import {EstablishmentDetailsOwnerComponent} from "./establishment-details-owner/establishment-details-owner.component";
import {UserFavoriteComponent} from "./user-favorite/user-favorite.component";
import {UserGradesComponent} from "./user-grades/user-grades.component";
import {UserDrinkersComponent} from "./user-drinkers/user-drinkers.component";
import {EditUserComponent} from "./edit/edit-user/edit-user.component";
import {NewsOwnerComponent} from "../newsModule/components/news-owner/news-owner.component";
import {AddNewComponent} from "../newsModule/components/add-new/add-new.component";
import {NewsDetailsOwnerComponent} from "../newsModule/news-details-owner/news-details-owner.component";
import {NewEditComponent} from "../newsModule/components/new-edit/new-edit.component";
import {
  EstablishmentEditComponent
} from "../establishmentModule/components/establishment-edit/establishment-edit.component";
import {AnaliticsComponent} from "../analiticModule/analitics/analitics.component";
import {UsersComponent} from "../userModule/components/users/users.component";
import {GradesOfEstablishmentComponent} from "../gradeModule/grades-of-establishment/grades-of-establishment.component";
import {
  EstablishmentDrinkersComponent
} from "../establishmentModule/components/establishment-drinkers/establishment-drinkers.component";
import {ChangerComponent} from "./changer/changer.component";
import {AnaliticPanelComponent} from "../analiticModule/analitic-panel/analitic-panel.component";
import {GradeDetailsComponent} from "../gradeModule/grade-details/grade-details.component";

const routes: Routes = [
  {
    path: '',
    component: AccountModuleComponent,
    children: [
      { path: 'establishments', component: UserEstablishmentsComponent },
      { path: 'establishments/add', component: AddEstablishmentComponent },
      { path: 'establishments/:id', component: EstablishmentDetailsOwnerComponent},
      {path: 'establishments/:id/drinker',component: EstablishmentDrinkersComponent},
      { path: 'favorite', component: UserFavoriteComponent },
      { path: 'grades', component: UserGradesComponent,children:[
          {path: ':id',component:GradeDetailsComponent}
        ] },
      {path:'analitic',component:AnaliticPanelComponent},
      { path: 'drinkers', component: UserDrinkersComponent },
      { path: 'edit', component: EditUserComponent },
      { path: 'establishments/:id/news', component: NewsOwnerComponent },
      { path: 'establishments/:id/news/add', component: AddNewComponent },
      { path: 'establishments/:id/news/:id', component: NewsDetailsOwnerComponent },
      { path: 'establishments/:id/news/:id/edit', component: NewEditComponent },
      { path: 'establishments/:id/edit', component: EstablishmentEditComponent },
      {path:'establishments/:id/grades',component: GradesOfEstablishmentComponent},
      { path: 'establishments/:id/analitic', component: AnaliticsComponent },
      {path:'changer',component: ChangerComponent},
      { path: 'users', component: UsersComponent },
      {path: 'favorite/:id', redirectTo: '/establishments/:id'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
