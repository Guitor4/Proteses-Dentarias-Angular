import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UserListComponent } from './user-list.component';
import { UserService } from '../../data-access/user.service';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, TableModule],
  providers: [UserService],
  exports: [UserListComponent],
})
export class UserListModule {}
