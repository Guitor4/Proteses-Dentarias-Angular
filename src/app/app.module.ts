import { ApiService } from './core/http/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DentistsComponent } from './components/dentists/dentists.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginModule } from './components/auth/login/login.module';
import { SidebarMenuModule } from './core/components/sidebar-menu/sidebar-menu.module';
import { HomeModule } from './components/home/home.module';
import { UserComponent } from './components/user/user.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    DentistsComponent,
    NotFoundComponent,
    ResetPasswordComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    CoreModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
