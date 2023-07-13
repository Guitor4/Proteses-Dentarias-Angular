import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DentistsComponent } from './components/dentists/dentists.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginModule } from './components/login/login.module';
import { SidebarMenuModule } from './components/sidebar-menu/sidebar-menu.module';
import { HomeModule } from './components/home/home.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DentistsComponent,
    NotFoundComponent,
    ResetPasswordComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    SidebarMenuModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
