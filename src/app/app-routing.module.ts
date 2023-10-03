import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'app/components/home/home.component';
import { LoginComponent } from 'app/components/auth/login/login.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { DentistsComponent } from './components/dentists/dentists.component';

const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'resetPassword', pathMatch: 'full', component: HomeComponent },
  // { path: '', pathMatch: 'full', redirectTo:'home' },
  {
    path: '',
    component: LayoutComponent,
    resolve: () => console.log('carreguei o resolver'),
    canActivate: [
      () => {
        console.log('carreguei o canActivate');
        return true;
      },
    ],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dentist', pathMatch: 'full', component: DentistsComponent },
      { path: 'dentist', pathMatch: 'full', component: DentistsComponent },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
