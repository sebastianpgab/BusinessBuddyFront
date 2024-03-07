import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private actions: string[] = [];

  constructor() {}

  addAction(action: string) {
    this.actions.push(action);
    if (this.actions.length > 10) {
      this.actions.shift();
    }
  }

  getActions(): string[] {
    return this.actions;
  }
}
