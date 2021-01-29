import { AbstractControl } from '@angular/forms';

export function lowercaseValidator(control: AbstractControl): {
  lowercase: boolean;
} | null {

  const value = control.value as string;

  if (value !== value.toLowerCase()) {
    return { lowercase: true };
  }

  return null;

}
