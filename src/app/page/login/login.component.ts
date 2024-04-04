import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { FormsModule } from '@angular/forms';
//import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../component/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  bgUrl = BG_IMG_URL;

  username: string = '';
  password: string = '';
  errorMessage: string = '';
  router = inject(Router);
  //toasterService = inject(ToastrService);

  ngOnInit() {
    // if (this.loginService.isLoggedIn) {
      //this.router.navigateByUrl('/browse');
   // }
  }


  login(): void {
    if (this.username === 'voss-solutions' && this.password === 'supersecretpassword') {
      // Authentication successful
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigateByUrl('/browse');
      this.errorMessage = '';
      // Redirect to the desired route
      console.log('Login successful, redirecting...');
    } else {
      // Authentication failed
      this.errorMessage = 'Invalid username or password.';
    }
  }
}