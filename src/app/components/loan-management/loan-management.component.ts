import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { ApiService } from '../../services/api.service';
import { Loan, LoanStatus } from '../../models';

@Component({
  selector: 'app-loan-management',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  templateUrl: './loan-management.component.html',
  styleUrl: './loan-management.component.scss'
})
export class LoanManagementComponent implements OnInit {
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);

  loanForm: FormGroup;
  loans: Loan[] = [];
  displayedColumns: string[] = ['loanNumber', 'amount', 'purpose', 'appliedDate', 'status'];

  constructor() {
    this.loanForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1000), Validators.max(100000)]],
      purpose: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.maxLength(500)]]
    });
  }

  ngOnInit() {
    this.loadLoans();
  }

  applyForLoan() {
    if (this.loanForm.valid) {
      this.apiService.applyLoan(this.loanForm.value).subscribe({
        next: () => {
          this.loadLoans();
          this.loanForm.reset();
          alert('Loan application submitted successfully!');
        },
        error: (error) => {
          console.error('Error applying for loan:', error);
          alert('Error submitting loan application. Please try again.');
        }
      });
    }
  }

  loadLoans() {
    this.apiService.getLoans().subscribe({
      next: (loans) => this.loans = loans,
      error: (error) => console.error('Error loading loans:', error)
    });
  }

  getStatusClass(status: LoanStatus): string {
    return `status-${status}`;
  }
}