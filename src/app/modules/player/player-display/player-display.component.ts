import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MissionDetails } from 'src/app/interfaces/missionDetails';

@Component({
  selector: 'mpl-player-display',
  templateUrl: './player-display.component.html',
  styleUrls: ['./player-display.component.scss'],
})
export class PlayerDisplayComponent {
  @ViewChild('player') player!: ElementRef;
  @Input() missions: MissionDetails[] = [];
  animationTimeout: any;

  startMission() {
    if (this.missions.length > 0) {
      this.animatePlayer(0);
    }
  }

  stopMission() {
    clearTimeout(this.animationTimeout);
  }

  // Animate the player movement between mission points
  animatePlayer(index: number) {
    if (index >= this.missions.length) return; // Exit condition for recursive animation

    const mission = this.missions[index];
    const playerEl = this.player.nativeElement;
    const duration = 1000;

    // Apply CSS transition to move the player to the next mission's coordinates
    playerEl.style.transition = `transform ${duration}ms linear`;
    playerEl.style.transform = `translate(${mission.xCoordinate * 3}px, ${
      mission.yCoordinate * 3
    }px)`;

    // Set timeout to animate the next mission after the specified duration
    this.animationTimeout = setTimeout(() => {
      this.animatePlayer(index + 1);
    }, duration);
  }
}
