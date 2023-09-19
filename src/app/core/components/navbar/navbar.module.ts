import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
