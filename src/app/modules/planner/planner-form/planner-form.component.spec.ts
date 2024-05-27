import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerFormComponent } from './planner-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PlannerFormComponent', () => {
  let component: PlannerFormComponent;
  let fixture: ComponentFixture<PlannerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlannerFormComponent],
      imports: [
        BrowserAnimationsModule,
        MatSnackBarModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
      ],
    });
    fixture = TestBed.createComponent(PlannerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
