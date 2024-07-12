import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmitHandler(form: any) {
    const val = form.value;
		this.authService.checkAuthentication(val.loginUsername, val.loginPass)
    .subscribe(
      () => {
        console.log("User is logged in");
        const currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.role === 0) {
          this.router.navigate(['home']);
        } else if (currentUser && currentUser.role === 1) {
          this.router.navigate(['admin/home']);
        }
      },
      error => {
        console.error("Login failed", error);
      }
    );
	}
}
