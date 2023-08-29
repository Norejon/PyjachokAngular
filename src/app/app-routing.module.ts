import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./modules/authModule/pages/login-page/login-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RegisterPageComponent} from "./modules/authModule/pages/register-page/register-page.component";
import {PyjachokFormComponent} from "./modules/pyjachokModule/components/pyjachok-form/pyjachok-form.component";
import {GradesComponent} from "./modules/gradeModule/grades/grades.component";
import {GradeDetailsComponent} from "./modules/gradeModule/grade-details/grade-details.component";


const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'establishments', pathMatch: "full"},
      {path: 'users', loadChildren: () => import('./modules/userModule/user.module').then(m => m.UserModule)},
      {path: 'establishments', loadChildren: () => import('./modules/establishmentModule/establishment.module').then(m => m.EstablishmentModule)},
      {path: 'account',loadChildren:()=>import('./modules/account-module/account.module').then(m=>m.AccountModule)},
      {path: 'news', loadChildren: () => import('./modules/newsModule/new.module').then(m => m.NewModule)},
      {path:'tops',loadChildren:()=>import('./modules/top-module/top.module').then(m=>m.TopModule)},
    ]
  },
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'pyjachok', component: PyjachokFormComponent},
  {path:'grades',component:GradesComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
