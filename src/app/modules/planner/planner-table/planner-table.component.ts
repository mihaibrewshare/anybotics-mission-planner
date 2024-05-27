import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MissionDetails } from 'src/app/interfaces/missionDetails';
import { MissionService } from 'src/app/services/mission-service.service';

@Component({
  selector: 'mpl-planner-table',
  templateUrl: './planner-table.component.html',
  styleUrls: ['./planner-table.component.scss'],
})
export class PlannerTableComponent implements OnInit {
  missions: MatTableDataSource<MissionDetails>;
  displayedColumns: string[] = [
    'id',
    'missionName',
    'xCoordinate',
    'yCoordinate',
  ];

  constructor(private missionService: MissionService) {
    this.missions = new MatTableDataSource<MissionDetails>();
  }

  getMissions() {
    this.missionService
      .getMissions()
      .subscribe((missions: MissionDetails[]) => {
        this.missions.data = missions;
      });
  }

  ngOnInit(): void {
    this.getMissions();
  }
}
