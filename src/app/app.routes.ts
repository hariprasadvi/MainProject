import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'attendance', pathMatch: 'full' },
  {
    path: 'attendance',
    loadComponent: () => import('./components/attendance/attendance.component').then(m => m.AttendanceComponent)
  },
  {
    path: 'meeting-minutes',
    loadComponent: () => import('./components/meeting-minutes/meeting-minutes.component').then(m => m.MeetingMinutesComponent)
  },
  {
    path: 'loans',
    loadComponent: () => import('./components/loan-management/loan-management.component').then(m => m.LoanManagementComponent)
  },
  {
    path: 'meetings',
    loadComponent: () => import('./components/meeting-organizer/meeting-organizer.component').then(m => m.MeetingOrganizerComponent)
  },
  {
    path: 'reports',
    loadComponent: () => import('./components/reports-analytics/reports-analytics.component').then(m => m.ReportsAnalyticsComponent)
  },
  { path: '**', redirectTo: 'attendance' }
];