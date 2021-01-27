import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';


  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  login(): void {
    this.service.authenticate(this.user, this.password).subscribe(
      () => {
        this.router.navigate(['animals']);
      },
      (err) => {
        alert('err');
      }
    );
  }

}
