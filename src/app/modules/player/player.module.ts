import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoMissionsModule } from 'src/app/shared/no-missions/no-missions.module';
import { PlayerOverviewComponent } from './player-overview/player-overview.component';
import { PlayerDisplayComponent } from './player-display/player-display.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
  },
];

@NgModule({
  declarations: [PlayerComponent, PlayerOverviewComponent, PlayerDisplayComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NoMissionsModule,
  ],
})
export class PlayerModule {}
