import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from 'src/app/auth/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  user$ = this.service.getUser();

  constructor(
    private router: Router,
    private service: UserService) { }


  logout(): void {
    this.service.logout();
    this.router.navigate(['']);
  }

}
