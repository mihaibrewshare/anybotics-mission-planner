import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MissionDetails } from 'src/app/interfaces/missionDetails';
import { MissionServiceService } from 'src/app/services/mission-service.service';

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

  constructor(private missionService: MissionServiceService) {
    this.missions = new MatTableDataSource<MissionDetails>();
  }

  ngOnInit(): void {
    this.missionService.getMissions().subscribe((missions: any[]) => {
      this.missions.data = missions;
    });
  }
}
