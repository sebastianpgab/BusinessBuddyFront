import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LastActionsComponent } from './last-actions.component';

const routes: Routes = [
  { path:'actions', component: LastActionsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ActionsModule { }
