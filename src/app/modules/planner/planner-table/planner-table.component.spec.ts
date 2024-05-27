import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerTableComponent } from './planner-table.component';

describe('PlannerTableComponent', () => {
  let component: PlannerTableComponent;
  let fixture: ComponentFixture<PlannerTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlannerTableComponent]
    });
    fixture = TestBed.createComponent(PlannerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
