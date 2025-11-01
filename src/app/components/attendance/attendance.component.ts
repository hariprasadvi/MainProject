import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent {
  private apiService = inject(ApiService);

  currentLocation: any = null;
  isScanning = false;
  attendanceStatus = '';

  async markAttendance() {
    try {
      this.isScanning = true;
      this.attendanceStatus = '';
      
      this.currentLocation = await this.getCurrentLocation();
      const faceVerified = await this.scanFace();
      
      if (faceVerified && this.currentLocation) {
        const attendanceData = {
          location: this.currentLocation,
          timestamp: new Date(),
          faceVerified: true
        };
        
        this.apiService.markAttendance(attendanceData).subscribe({
          next: () => {
            this.attendanceStatus = 'Attendance marked successfully!';
            this.isScanning = false;
          },
          error: () => {
            this.attendanceStatus = 'Error marking attendance';
            this.isScanning = false;
          }
        });
      }
    } catch (error) {
      this.attendanceStatus = `Error: ${error}`;
      this.isScanning = false;
    }
  }

  private getCurrentLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Geolocation not supported');
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
        (error) => reject(error)
      );
    });
  }

  private scanFace(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 2000);
    });
  }
}