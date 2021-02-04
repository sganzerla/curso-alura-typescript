import { Router } from '@angular/router';
import { UserExistsService } from './userExists.service';
import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { lowercaseValidator } from './lowercase.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(
    private newUserService: NewUserService,
    private userExistsService: UserExistsService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.newUserForm = this.formBuilder.group({
      // terceira posição do array são validações assíncronas
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [lowercaseValidator], [this.userExistsService.userExists()]],
      password: ['']
    });

  }

  cadastrar(): void {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.save(newUser).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
