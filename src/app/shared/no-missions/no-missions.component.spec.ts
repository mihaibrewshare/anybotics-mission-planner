import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMissionsComponent } from './no-missions.component';

describe('NoMissionsComponent', () => {
  let component: NoMissionsComponent;
  let fixture: ComponentFixture<NoMissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoMissionsComponent]
    });
    fixture = TestBed.createComponent(NoMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
