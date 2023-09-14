import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { RouterModule } from '@angular/router';

import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    RouterModule,
    MenubarModule,
  ],
  declarations: [SidebarMenuComponent],
  exports: [SidebarMenuComponent]
})
export class SidebarMenuModule { }
