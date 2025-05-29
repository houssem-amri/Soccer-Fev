import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UsersService) { }

  canActivate(activatedRoute: ActivatedRouteSnapshot): boolean {

    const userRole = this.userService.getUserRole();
    const requiredRole =activatedRoute.data['role'] ;  // Récupère le rôle depuis la    
    
    if (requiredRole.includes(userRole) ) {
      return true; // Autoriser la navigation
    } else {

      this.router.navigate(['/login']); // Rediriger vers la page de login
      return false; // Bloquer la navigation
    }
  }

}
