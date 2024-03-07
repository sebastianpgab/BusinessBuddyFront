import { Component, OnInit } from '@angular/core';
import { ActionsService } from './actions.service';

@Component({
  selector: 'app-last-actions',
  templateUrl: './last-actions.component.html',
  styles: [
  ]
})
export class LastActionsComponent implements OnInit {
  actions: string[] = [];

  constructor(private actionsService: ActionsService) {}

  ngOnInit() {
    this.actions = this.actionsService.getActions();
  }
}
