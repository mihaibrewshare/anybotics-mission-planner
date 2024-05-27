import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDisplayComponent } from './player-display.component';
import { MatIconModule } from '@angular/material/icon';

describe('PlayerDisplayComponent', () => {
  let component: PlayerDisplayComponent;
  let fixture: ComponentFixture<PlayerDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerDisplayComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(PlayerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
