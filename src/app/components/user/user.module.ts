import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserService } from './data-access/user.service';
import { UserTableComponent } from './ui/user-table/user-table.component';

@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [CommonModule, UserRoutingModule],
  providers: [UserService],
})
export class UserModule {}
