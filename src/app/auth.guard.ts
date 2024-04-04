// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('isLoggedIn') === "true") {
      // User is logged in, allow access to the route
      return true;
    } else {
      // User is not logged in, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
