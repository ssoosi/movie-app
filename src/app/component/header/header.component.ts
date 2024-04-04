import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LOGO_URL } from '../../constants/config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showLink: boolean = true;
  logoutcheck: string | null | undefined
  constructor(private router: Router) {} // Inject Router
  logoUrl = LOGO_URL;
 
  
  
  
 
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

