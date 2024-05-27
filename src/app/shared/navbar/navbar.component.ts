import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarMenuItem } from 'src/app/interfaces/navbarMenuItem';

@Component({
  selector: 'mpl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() navbarMenuItems: NavbarMenuItem[] = [];

  constructor(private router: Router) {}

  navbarRedirect(route: string) {
    this.router.navigate([route]);
  }
}
