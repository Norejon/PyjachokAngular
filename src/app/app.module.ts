import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginPageComponent } from './modules/authModule/pages/login-page/login-page.component';
import { RegisterPageComponent } from './modules/authModule/pages/register-page/register-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TopModuleComponent } from './modules/top-module/top-module.component';
import {EstablishmentModule} from "./modules/establishmentModule/establishment.module";
import { PyjachokFormComponent } from './modules/pyjachokModule/components/pyjachok-form/pyjachok-form.component';
import {AuthInterceptor} from "./auth.interceptor";
import { AccountModuleComponent } from './modules/account-module/account-module.component';
import { UserEstablishmentsComponent } from './modules/account-module/user-establishments/user-establishments.component';
import { UserGradesComponent } from './modules/account-module/user-grades/user-grades.component';
import { UserFavoriteComponent } from './modules/account-module/user-favorite/user-favorite.component';
import { EstablishmentDetailsOwnerComponent } from './modules/account-module/establishment-details-owner/establishment-details-owner.component';
import { GradesComponent } from './modules/gradeModule/grades/grades.component';
import { GradeComponent } from './modules/gradeModule/grade/grade.component';
import { UserDrinkersComponent } from './modules/account-module/user-drinkers/user-drinkers.component';
import { DrinkersComponent } from './modules/pyjachokModule/components/drinkers/drinkers.component';
import { DrinkerComponent } from './modules/pyjachokModule/components/drinker/drinker.component';
import { EditUserComponent } from './modules/account-module/edit/edit-user/edit-user.component';
import { AnaliticComponent } from './modules/analiticModule/analitic/analitic.component';
import { AnaliticsComponent } from './modules/analiticModule/analitics/analitics.component';
import { GradeDetailsComponent } from './modules/gradeModule/grade-details/grade-details.component';
import { AnaliticPanelComponent } from './modules/analiticModule/analitic-panel/analitic-panel.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        HeaderComponent,
        LoginPageComponent,
        RegisterPageComponent,
        TopModuleComponent,
        PyjachokFormComponent,
        AccountModuleComponent,
        UserEstablishmentsComponent,
        UserGradesComponent,
        UserFavoriteComponent,
        EstablishmentDetailsOwnerComponent,
        GradesComponent,
        GradeComponent,
        UserDrinkersComponent,
        DrinkersComponent,
        DrinkerComponent,
        EditUserComponent,
        AnaliticComponent,
        AnaliticsComponent,
        GradeDetailsComponent,
        AnaliticPanelComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        EstablishmentModule,
        NgxPaginationModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        multi: true,
        useClass: AuthInterceptor
    }],
  exports: [
    GradeDetailsComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
