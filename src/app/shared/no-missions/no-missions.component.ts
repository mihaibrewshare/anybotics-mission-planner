import { Component, Input } from '@angular/core';

@Component({
  selector: 'mpl-no-missions',
  templateUrl: './no-missions.component.html',
  styleUrls: ['./no-missions.component.scss'],
})
export class NoMissionsComponent {
  @Input() text = '';
}
