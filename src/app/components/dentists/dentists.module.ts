import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DentistsComponent } from './dentists.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
@NgModule({
  imports: [CommonModule, CardModule, ButtonModule, TableModule],
  declarations: [DentistsComponent],
  exports: [DentistsComponent],
})
export class DentistsModule {}
