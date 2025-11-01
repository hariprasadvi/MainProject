import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ApiService } from '../../services/api.service';
import { Meeting } from '../../models';

@Component({
  selector: 'app-meeting-minutes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './meeting-minutes.component.html',
  styleUrl: './meeting-minutes.component.scss'
})
export class MeetingMinutesComponent implements OnInit {
  private apiService = inject(ApiService);

  isRecording = false;
  selectedMeeting: string = '';
  selectedMeetingDetails: Meeting | null = null;
  meetings: Meeting[] = [];
  transcript = '';
  summary = '';
  recordingTime = 0;
  private recordingInterval: any;

  // Sample meetings for demo (remove when you have real data)
  private sampleMeetings: Meeting[] = [
    {
      id: '1',
      title: 'Monthly Community Meeting',
      description: 'Regular monthly meeting to discuss community issues and updates',
      date: new Date('2024-01-15'),
      startTime: '10:00',
      endTime: '12:00',
      location: 'Community Hall',
      organizerId: 'admin1',
      organizerName: 'Community Coordinator',
      status: 'completed' as any,
      attendees: ['user1', 'user2', 'user3'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      title: 'Loan Committee Review',
      description: 'Review of pending loan applications and disbursements',
      date: new Date('2024-01-20'),
      startTime: '14:00',
      endTime: '16:00',
      location: 'Kudumbashree Office',
      organizerId: 'admin2',
      organizerName: 'Loan Officer',
      status: 'scheduled' as any,
      attendees: ['user4', 'user5'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      title: 'Skill Development Workshop',
      description: 'Training session on handicraft making and marketing',
      date: new Date('2024-01-25'),
      startTime: '09:00',
      endTime: '17:00',
      location: 'Training Center',
      organizerId: 'admin3',
      organizerName: 'Training Coordinator',
      status: 'scheduled' as any,
      attendees: ['user6', 'user7', 'user8', 'user9'],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  ngOnInit() {
    this.loadMeetings();
  }

  loadMeetings() {
    // For now, use sample data. Replace with actual API call later
    this.meetings = this.sampleMeetings;
    
    // Uncomment when you have real API:
    // this.apiService.getMeetings().subscribe({
    //   next: (meetings) => this.meetings = meetings,
    //   error: (error) => {
    //     console.error('Error loading meetings:', error);
    //     // Fallback to sample data
    //     this.meetings = this.sampleMeetings;
    //   }
    // });
  }

  onMeetingSelect() {
    if (this.selectedMeeting) {
      this.selectedMeetingDetails = this.meetings.find(m => m.id === this.selectedMeeting) || null;
    } else {
      this.selectedMeetingDetails = null;
    }
    this.transcript = '';
    this.summary = '';
  }

  startRecording() {
    if (!this.selectedMeeting) return;
    
    this.isRecording = true;
    this.recordingTime = 0;
    this.recordingInterval = setInterval(() => {
      this.recordingTime++;
    }, 1000);
    
    console.log('Recording started for meeting:', this.selectedMeeting);
    
    // Simulate recording process
    setTimeout(() => {
      if (this.isRecording) {
        this.stopRecording();
      }
    }, 10000); // Auto-stop after 10 seconds for demo
  }

  stopRecording() {
    this.isRecording = false;
    if (this.recordingInterval) {
      clearInterval(this.recordingInterval);
      this.recordingInterval = null;
    }
    
    console.log('Recording stopped. Duration:', this.recordingTime, 'seconds');
    
    // Simulate processing the recording
    this.simulateProcessing();
  }

  private simulateProcessing() {
    // Simulate API call to process recording
    setTimeout(() => {
      const meetingTitle = this.selectedMeetingDetails?.title || 'Meeting';
      const meetingDate = this.selectedMeetingDetails?.date ? 
        new Date(this.selectedMeetingDetails.date).toLocaleDateString('en-US', { 
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
        }) : 'Unknown Date';
      const meetingLocation = this.selectedMeetingDetails?.location || 'Unknown Location';

      this.transcript = `Meeting Transcript for: ${meetingTitle}

Date: ${meetingDate}
Location: ${meetingLocation}

ATTENDEES:
- Member 1 (Community Coordinator)
- Member 2 (Treasurer)
- Member 3 (Secretary)
- Member 4 (General Member)

MEETING MINUTES:

1. OPENING REMARKS
The meeting was called to order at 10:05 AM by the Community Coordinator.

2. APPROVAL OF PREVIOUS MINUTES
The minutes from the previous meeting were reviewed and approved unanimously.

3. FINANCIAL REPORT
The treasurer presented the financial report showing a current balance of ₹85,430. 
Members discussed upcoming expenses and approved the budget for community activities.

4. LOAN APPLICATIONS REVIEW
Three new loan applications were reviewed:
- Application #L001: ₹25,000 for small business - APPROVED
- Application #L002: ₹15,000 for education - APPROVED with conditions
- Application #L003: ₹50,000 for housing repair - DEFERRED for additional documentation

5. COMMUNITY PROJECT UPDATES
Members discussed progress on the community garden project. 
Volunteers requested for weekend maintenance.

6. NEXT MEETING
The next meeting is scheduled for February 15, 2024, at the Community Hall.

7. ADJOURNMENT
The meeting was adjourned at 11:45 AM.`;

      this.summary = `MEETING SUMMARY: ${meetingTitle}

KEY DECISIONS:
✓ Approved previous meeting minutes
✓ Approved financial report and budget
✓ Approved 2 out of 3 loan applications
✓ Continued community garden project

ACTION ITEMS:
1. Process approved loan disbursements - Due: Jan 25
2. Follow up on deferred loan application - Due: Jan 22
3. Organize volunteer schedule for garden - Due: Jan 30

NEXT STEPS:
- Prepare for February community meeting
- Monitor project progress
- Review financial performance

ATTENDANCE: 4 members present`;
    }, 2000);
  }

  generateSummary() {
    if (!this.selectedMeeting) return;
    
    this.apiService.getMeetingTranscript(this.selectedMeeting).subscribe({
      next: (response) => {
        this.transcript = response.transcript || this.transcript;
        this.summary = response.summary || this.summary;
      },
      error: (error) => {
        console.error('Error generating summary:', error);
        // Use simulated data as fallback
        if (!this.transcript) {
          this.simulateProcessing();
        }
      }
    });
  }

  clearSelection() {
    this.selectedMeeting = '';
    this.selectedMeetingDetails = null;
    this.transcript = '';
    this.summary = '';
    if (this.isRecording) {
      this.stopRecording();
    }
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
      // You can add a snackbar notification here
    });
  }

  downloadTranscript() {
    this.downloadFile(this.transcript, 'transcript.txt', 'text/plain');
  }

  downloadSummary() {
    this.downloadFile(this.summary, 'meeting-summary.txt', 'text/plain');
  }

  private downloadFile(content: string, filename: string, contentType: string) {
    const blob = new Blob([content], { type: contentType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}