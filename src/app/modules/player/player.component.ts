import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MissionDetails } from 'src/app/interfaces/missionDetails';
import { MissionService } from 'src/app/services/mission-service.service';

@Component({
  selector: 'mpl-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @ViewChild('player') player!: ElementRef;
  missions: MissionDetails[] = [];
  animationTimeout: any;

  constructor(private missionService: MissionService) {}

  getMissions() {
    this.missionService
      .getMissions()
      .subscribe((missions: MissionDetails[]) => {
        this.missions = missions;
      });
  }

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

  ngOnInit(): void {
    this.getMissions();
  }
}
