import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarMenuModule } from '../sidebar-menu/sidebar-menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, NavbarModule, SidebarMenuModule, RouterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
