import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prot-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableComponent {

}
