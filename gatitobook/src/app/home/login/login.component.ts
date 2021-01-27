import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';


  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }


  login(): void {
    this.service.authenticate(this.user, this.password).subscribe(
      () => {

      },
      (err) => {
        alert('err');
      }
    );
  }

}
