import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';
import { CustomerListComponent } from '../customer/customer-list/customer-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  actions: string[] = [];

  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit() {
    this.actions = this.dashboardService.getActions();
  }

  navigateToAction(action: string): void {
    let path;
    switch (action) {
      case 'Dodanie klienta':
        path = '/customer/add';
        break;
      default:
        path = '/';
    }
    this.router.navigate([path]);
  }

}
