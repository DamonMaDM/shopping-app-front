import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authService : AuthService) { }

  ngOnInit(): void {
  }

  isUserLoggedIn(): boolean {
    return this.authService.currentUserValue !== null;
  }

  getUserRole(): number | undefined {
    const currentUser = this.authService.currentUserValue;
    return currentUser ? currentUser.role : -1;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
