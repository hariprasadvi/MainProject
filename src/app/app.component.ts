import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Kudumbashree Services';
  
  navItems: NavItem[] = [
    { path: '/attendance', label: 'Attendance', icon: 'fingerprint' },
    { path: '/meeting-minutes', label: 'Meeting Minutes', icon: 'record_voice_over' },
    { path: '/loans', label: 'Loan Management', icon: 'account_balance' },
    { path: '/meetings', label: 'Organize Meetings', icon: 'event' },
    { path: '/reports', label: 'Reports & Analytics', icon: 'analytics' }
  ];
}