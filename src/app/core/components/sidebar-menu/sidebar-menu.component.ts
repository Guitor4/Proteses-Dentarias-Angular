import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSession } from 'app/shared/models/user.model';
import { LocalStorageService } from 'app/shared/services/localStorage.service';

import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'prot-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  display = false;
  loggedUser: UserSession;

  setDisplay() {
    this.display = !this.display;
  }

  items: MenuItem[] = [];

  constructor(private router: Router, private localStorageService: LocalStorageService) {
    this.loggedUser = this.localStorageService.getUserInfo();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: PrimeIcons.FILE,
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Teste',
        command: () => {
          this.display = !this.display;
        },
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }
}
