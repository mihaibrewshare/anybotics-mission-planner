import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerTableComponent } from './planner-table.component';
import { NoMissionsModule } from 'src/app/shared/no-missions/no-missions.module';

describe('PlannerTableComponent', () => {
  let component: PlannerTableComponent;
  let fixture: ComponentFixture<PlannerTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlannerTableComponent],
      imports: [NoMissionsModule],
    });
    fixture = TestBed.createComponent(PlannerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
