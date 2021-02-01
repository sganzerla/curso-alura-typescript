import { first, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { NewUserService } from './new-user.service';
@Injectable({
  providedIn: 'root'
})
export class UserExistsService {

  constructor(private service: NewUserService) { }

  userExists(): (control: AbstractControl) => Observable<{ existingUser: boolean; } | null> {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        // trocar o fluxo
        switchMap((userName) =>
          this.service.userExists(userName)
        ),
        // trocar o resultado
        map((userExists) => (userExists ? { existingUser: true } : null)
        ),
        // encerrar o observable
        first()
      );
    };
  }
}
