import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Signup</h2>
    <form [formGroup]="signupForm" (ngSubmit)="onSignup()">
      <label>Username:</label>
      <input formControlName="username" type="text" />
      <br>
      <label>Email:</label>
      <input formControlName="email" type="email" />
      <br>
      <label>Password:</label>
      <input formControlName="password" type="password" />
      <br>
      <button type="submit">Signup</button>
    </form>
  `
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSignup() {
    this.userService.signup(this.signupForm.value).subscribe({
      next: () => {
        alert('Signup successful!');
        this.router.navigate(['/login']); // Rediriger vers login après inscription
      },
      error: err => alert('Signup error: ' + (err.error?.message || 'Unknown'))
    });
  }
}
