import { Component, Input } from '@angular/core';
import { MissionDetails } from 'src/app/interfaces/missionDetails';

@Component({
  selector: 'mpl-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.scss'],
})
export class PlayerOverviewComponent {
  @Input() missions: MissionDetails[] = [];
}
