import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserSession } from 'app/shared/models/user.model';
import { LocalStorageService } from 'app/shared/services/localStorage.service';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'prot-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() sidebarTrigger = new EventEmitter();

  menuItems: MenuItem[] = [
    {
      label: 'File',
      icon: PrimeIcons.FILE,
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [{ label: 'Project' }, { label: 'Other' }],
        },
        { label: 'Open', command: () => this.navigateTo('home') },
        { label: 'Quit' },
      ],
    },
    {
      label: 'Teste',
      command: () => {
        this.sidebarTrigger.emit('changeSidebarDisplay')
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

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.loggedUser = this.localStorageService.getUserInfo();
  }

  ngOnInit() {}

  display = false;
  loggedUser: UserSession;

  setDisplay() {
    this.display = !this.display;
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
