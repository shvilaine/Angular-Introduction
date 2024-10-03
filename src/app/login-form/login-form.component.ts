import { Component } from '@angular/core';
import { AbstractControl, FormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Indentifiers } from '../models/identifiers.model';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})

export class LoginFormComponent {
  newLogin: Indentifiers = {
    email: "",
    password: "",
  }

  securePasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || ''; 
      const isValidLength = value.length >= 6;
      const passwordValid = isValidLength;
      return passwordValid ? null : { securePassword: true };
    };
  }

  onSubmit(): void {
    // Envoie le formulaire
    console.log('Formulaire envoyé!');
  }

}
