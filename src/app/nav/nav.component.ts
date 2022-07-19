import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public username: string;
  public password: string;
  @Input() public isUserLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}
  isLoggedOut() {
    this.authService
      .authenticate(this.username, this.password)
      .subscribe((response: any) => {
        this.cookieService.delete('jsessionId', response.sessionId);
        console.log(response);
      });
  }
}
