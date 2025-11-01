import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting, Loan, Attendance } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/api';

  // Meeting minutes endpoints
  recordMeetingAudio(meetingId: string, audioBlob: Blob): Observable<any> {
    const formData = new FormData();
    formData.append('audio', audioBlob);
    formData.append('meetingId', meetingId);
    return this.http.post(`${this.baseUrl}/meetings/record`, formData);
  }

  getMeetingTranscript(meetingId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/meetings/${meetingId}/transcript`);
  }

  // Attendance endpoints
  markAttendance(attendanceData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/attendance`, attendanceData);
  }

  // Loan management endpoints
  applyLoan(loanData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/loans/apply`, loanData);
  }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.baseUrl}/loans`);
  }

  // Meeting organizer endpoints
  scheduleMeeting(meetingData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/meetings/schedule`, meetingData);
  }

  getMeetings(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${this.baseUrl}/meetings`);
  }
}