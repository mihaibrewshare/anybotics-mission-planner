import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PlannerComponent,
  },
];

@NgModule({
  declarations: [PlannerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PlannerModule {}
