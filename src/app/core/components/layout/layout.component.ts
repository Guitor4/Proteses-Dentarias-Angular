import { Component } from '@angular/core';

@Component({
  selector: 'prot-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  siderbarDisplayNumber = 0; //Ferramenta para alterar a visibilidade do sidebar por meio de um Input set no componente Sidebar-Menu 

  changeSidebarDisplay() {
    this.siderbarDisplayNumber++;
  }
}
