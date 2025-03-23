import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>My Angular App</h1>
    <nav>
      <a routerLink="/signup">Signup</a> |
      <a routerLink="/login">Login</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
