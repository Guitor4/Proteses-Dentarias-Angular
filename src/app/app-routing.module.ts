import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'app/components/home/home.component';
import { LoginComponent } from 'components/login/login.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'resetPassword', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo:'home' },
  {
    path: '', component: SidebarMenuComponent, children: [
      { path: 'home', component: HomeComponent },

    ],
  },
  { path: '**', redirectTo: 'teste' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
