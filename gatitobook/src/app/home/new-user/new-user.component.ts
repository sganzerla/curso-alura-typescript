import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(
    private service: NewUserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: [''],
      password: ['']
    });

  }

  cadastrar(): void {
    const newUser = this.newUserForm.getRawValue() as NewUser;
    console.log(newUser);
  }

}
