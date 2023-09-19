import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './components/navbar/navbar.module';
import { SidebarMenuModule } from './components/sidebar-menu/sidebar-menu.module';
import { LayoutModule } from './components/layout/layout.module';

@NgModule({
  imports: [CommonModule, NavbarModule, SidebarMenuModule, LayoutModule],
})
export class CoreModule {}
