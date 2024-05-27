import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOverviewComponent } from './player-overview.component';
import { MatExpansionModule } from '@angular/material/expansion';

describe('PlayerOverviewComponent', () => {
  let component: PlayerOverviewComponent;
  let fixture: ComponentFixture<PlayerOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerOverviewComponent],
      imports: [MatExpansionModule],
    });
    fixture = TestBed.createComponent(PlayerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
