import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [
    UserPageComponent,
    UsersComponent,
    UserComponent,
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        NgxPaginationModule
    ]
})
export class UserModule { }
