import { Injectable } from '@angular/core';
import { MissionDetails } from '../interfaces/missionDetails';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private missionsKey = 'missions';
  private missionsSubject$ = new BehaviorSubject<MissionDetails[]>([]);

  constructor() {
    this.getMissionsFromLocalStorage();
  }

  // Retrieve missions from localStorage upon initialization
  private getMissionsFromLocalStorage(): void {
    const missionsJson = localStorage.getItem(this.missionsKey);
    const missions: MissionDetails[] = missionsJson
      ? JSON.parse(missionsJson)
      : [];
    this.missionsSubject$.next(missions);
  }

  // Return the missions array as a behavior subject, so we can subscribe to it and get it's current value
  getMissions(): BehaviorSubject<MissionDetails[]> {
    return this.missionsSubject$;
  }

  // Create new mission
  addMission(newMission: MissionDetails): void {
    const missions = this.missionsSubject$.getValue();

    // Check latest mission's id and create the id for the newly added mission
    const newId =
      missions.length > 0 ? missions[missions.length - 1].id + 1 : 1;
    newMission.id = newId;
    missions.push(newMission);

    // Add missions to localStorage
    localStorage.setItem(this.missionsKey, JSON.stringify(missions));
    this.missionsSubject$.next(missions);
  }
}
