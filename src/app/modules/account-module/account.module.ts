import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ChangerComponent } from './changer/changer.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ChangerComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
