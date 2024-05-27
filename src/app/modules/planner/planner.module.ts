import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner.component';
import { RouterModule, Routes } from '@angular/router';
import { PlannerFormComponent } from './planner-form/planner-form.component';
import { PlannerTableComponent } from './planner-table/planner-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: PlannerComponent,
  },
];

@NgModule({
  declarations: [PlannerComponent, PlannerFormComponent, PlannerTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  exports: [PlannerFormComponent, PlannerTableComponent],
})
export class PlannerModule {}
