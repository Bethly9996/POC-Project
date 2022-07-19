import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  private cookie_name = '';
  private all_cookies: any = '';

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Basic dGVzdEF0dGFjaGVlOkFtcGF0aDQ1Ng==');
    myHeaders.append('Cookie', 'JSESSIONID=C04EC78A5C638CB451E37CA2B593610B');
  }

  deleteCookie() {
    this.cookieService.delete('sessionId');
  }

  deleteAll() {
    this.cookieService.deleteAll();
  }

  ngOnInit(): void {
    this.cookie_name = this.cookieService.get('name');
    this.all_cookies = this.cookieService.getAll(); // get all cookies object
  }

  onSubmit() {
    console.log('form submitted');
  }
  isLoggedIn() {
    this.authService
      .authenticate(this.username, this.password)
      .subscribe((response: any) => {
        this.cookieService.set('jsessionId', response.sessionId);
        console.log(response);

        if (response.authenticated === true) {
          this.router.navigate(['./home']);
        } else {
          alert('Cannot Login. Either Username or Password is incorrect');
          return false;
        }
      });
  }
  getCookie() {
    this.cookieService.get('jsessionId');
  }
}
