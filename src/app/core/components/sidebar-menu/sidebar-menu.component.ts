import { Component, Input } from '@angular/core';

@Component({
  selector: 'prot-sidebar-menu',
  template: `<p-sidebar [(visible)]="display"> Content </p-sidebar>`,
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  @Input() set setDisplay(_arg: number) {
    if (!_arg) return; //Ignorar o primeiro input para que o sidebar não seja aberto por padrão
    this.display = !this.display;
  }

  display = false;
}
