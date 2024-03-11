import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private actionsKey = 'actions';
  private actions: string[] = [].reverse();

  constructor() {
    this.loadActions();
  }

  addAction(action: string) {
    this.actions.push(action);
    if (this.actions.length > 10) {
      this.actions.shift();
    }
    this.saveActions();
  }

  getActions(): string[] {
    return this.actions;
  }

  private loadActions() {
    const actionsFromStorage = localStorage.getItem(this.actionsKey);
    if (actionsFromStorage) {
      this.actions = JSON.parse(actionsFromStorage);
    }
  }

  private saveActions() {
    localStorage.setItem(this.actionsKey, JSON.stringify(this.actions));
  }
}
