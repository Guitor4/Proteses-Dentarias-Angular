import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,

  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
