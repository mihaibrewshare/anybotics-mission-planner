import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MissionDetails } from 'src/app/interfaces/missionDetails';
import { MissionServiceService } from 'src/app/services/mission-service.service';

@Component({
  selector: 'mpl-planner-form',
  templateUrl: './planner-form.component.html',
  styleUrls: ['./planner-form.component.scss'],
})
export class PlannerFormComponent implements OnInit {
  formGroup!: FormGroup;
  missions: MissionDetails[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private missionService: MissionServiceService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      missionName: ['', Validators.required],
      xCoordinate: ['', Validators.required],
      yCoordinate: ['', Validators.required],
    });

    this.missionService.getMissions().subscribe((missions: any[]) => {
      this.missions = missions;
    });
  }

  onSubmit() {
    const formData = this.formGroup.value;

    // Check if current mission's coordinates match last mission's coordinates. If so, throw an error.
    if (
      this.missions.length > 0 &&
      this.missions[this.missions.length - 1].xCoordinate ===
        formData.xCoordinate &&
      this.missions[this.missions.length - 1].yCoordinate ===
        formData.yCoordinate
    ) {
      this.openSnackBar('Coordinates are the same as the last mission!');
      return;
    }

    this.missionService.addMission(formData);
    this.formGroup.reset();
    this.openSnackBar('Mission successfully created!');
  }

  // Enable/ disable form button based on form's validity
  isFormIncomplete(): boolean {
    const missionNameControl = this.formGroup.get('missionName');
    const xCoordinateControl = this.formGroup.get('xCoordinate');
    const yCoordinateControl = this.formGroup.get('yCoordinate');

    return !(
      missionNameControl?.value?.trim() &&
      typeof xCoordinateControl?.value === 'number' &&
      !isNaN(xCoordinateControl?.value) &&
      typeof yCoordinateControl?.value === 'number' &&
      !isNaN(yCoordinateControl?.value)
    );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
