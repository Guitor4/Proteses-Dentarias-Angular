import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { HomeComponent } from './home.component';
import { AppointmentListComponent } from './ui/appointment-list/appointment-list.component';


@NgModule({
  declarations: [HomeComponent, AppointmentListComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ]
})
export class HomeModule { }
