import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Login</h2>
    <form [formGroup]="loginForm" (ngSubmit)="onLogin()">
      <label>Username:</label>
      <input formControlName="username" type="text" />
      <br>
      <label>Password:</label>
      <input formControlName="password" type="password" />
      <br>
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.userService.login(this.loginForm.value).subscribe({
      next: () => {
        alert('Login successful!');
        this.router.navigate(['/welcome']);
      },
      error: err => alert('Login error: ' + (err.error?.message || 'Unknown'))
    });
  }
}
