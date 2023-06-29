import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {LoginPageComponent} from "./modules/authModule/pages/login-page/login-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RegisterPageComponent} from "./modules/authModule/pages/register-page/register-page.component";

const routes:Routes=[
  {path:'',component:MainLayoutComponent,children:[
      {path:'',redirectTo:'users',pathMatch:"full"},
      {path:'users',loadChildren:()=>import('./modules/userModule/user.module').then(m=>m.UserModule)},
      {path:'establishments',loadChildren:()=>import('./modules/establishmentModule/establishment.module').then(m=>m.EstablishmentModule)},
      {path:'news',loadChildren:()=>import('./modules/newsModule/new.module').then(m=>m.NewModule)}
    ]},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
