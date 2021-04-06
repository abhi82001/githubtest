import { AuthenticationService } from './service/authentication/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-page';

  constructor(public authenticationService: AuthenticationService){

  }
  logout() {
    this.authenticationService.logout();
  }
}
