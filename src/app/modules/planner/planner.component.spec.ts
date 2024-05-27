import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlannerComponent } from './planner.component';
import { PlannerFormComponent } from './planner-form/planner-form.component';
import { PlannerTableComponent } from './planner-table/planner-table.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoMissionsModule } from 'src/app/shared/no-missions/no-missions.module';

describe('PlannerComponent', () => {
  let component: PlannerComponent;
  let fixture: ComponentFixture<PlannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlannerComponent,
        PlannerFormComponent,
        PlannerTableComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatTableModule,
        NoMissionsModule,
      ],
    });
    fixture = TestBed.createComponent(PlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
