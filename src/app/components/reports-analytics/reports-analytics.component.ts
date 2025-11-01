import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reports-analytics',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule
  ],
  templateUrl: './reports-analytics.component.html',
  styleUrl: './reports-analytics.component.scss'
})
export class ReportsAnalyticsComponent {
  reportTypes = [
    {
      title: 'Meeting Reports',
      description: 'Generate meeting attendance and minutes reports',
      icon: 'event',
      type: 'meeting'
    },
    {
      title: 'Loan Reports',
      description: 'View loan applications and status reports',
      icon: 'account_balance',
      type: 'loan'
    },
    {
      title: 'Attendance Reports',
      description: 'Generate member attendance statistics',
      icon: 'bar_chart',
      type: 'attendance'
    },
    {
      title: 'Financial Reports',
      description: 'Financial summaries and analytics',
      icon: 'pie_chart',
      type: 'financial'
    }
  ];

  generateReport(reportType: string) {
    alert(`Generating ${reportType} report...`);
    // Implement report generation logic
  }
}