import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { TranslationService } from './services/translation.service';

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private translationService = inject(TranslationService);
  
  translations = this.translationService.translations$;
  currentLanguage = this.translationService.getCurrentLanguage();

  navItems: NavItem[] = [
    { path: '/attendance', label: 'ATTENDANCE', icon: 'fingerprint' },
    { path: '/meeting-minutes', label: 'MEETING_MINUTES', icon: 'record_voice_over' },
    { path: '/loans', label: 'LOAN_MANAGEMENT', icon: 'account_balance' },
    { path: '/meetings', label: 'ORGANIZE_MEETINGS', icon: 'event' },
    { path: '/reports', label: 'REPORTS_ANALYTICS', icon: 'analytics' }
  ];

  toggleLanguage() {
    this.translationService.toggleLanguage();
    this.currentLanguage = this.translationService.getCurrentLanguage();
  }

  // Helper method to safely get translations
  getTranslation(key: string): string {
    return (this.translations() as any)[key] || key;
  }
}