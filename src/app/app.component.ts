import { Component } from '@angular/core';
import { NavbarMenuItem } from './interfaces/navbarMenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navbarMenuItems: NavbarMenuItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'Planner', route: '/planner' },
    { label: 'Player', route: '/player' },
  ];
}
