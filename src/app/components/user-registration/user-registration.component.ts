import { Component, inject } from '@angular/core';
import { FormGroup , FormControl, ReactiveFormsModule , Validators , AbstractControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/mongo-backend';

@Component({
  selector: 'app-user-registration',
  imports: [MatInputModule , MatFormFieldModule , MatButtonModule, ReactiveFormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

  userService = inject(UserService)

  registrationStatus : {success: boolean , message: string} = {
      success: false,
      message: "not attempted yet"
  }

  form = new FormGroup ({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    email: new FormControl('' , [Validators.required,Validators.email]),
    password: new FormControl('' , [Validators.required , Validators.minLength(4)]),
    confirmPassword: new FormControl('' , [Validators.required , Validators.minLength(4)]),
  },
  this.passwordConfirmPasswordValidator)

  passwordConfirmPasswordValidator(control : AbstractControl):{ [key:string]:boolean} | null  {

      const form = control as FormGroup
      const password = form.get('password')?.value
      const confirmPassword = form.get('confirmPassword')?.value

      if(password && confirmPassword && password != confirmPassword){
        form.get("confirmPassword")?.setErrors({passwordMissmatch: true})
        return{passwordMissmatch : true}
      }
      return null
  }

  onSubmit(value:any) {
     console.log(value);
     this.checkOnSubmit();
  }
  registerAnother(){
    this.form.reset()
    this.registrationStatus = {success:false , message:'Not attempted yet'}
  }

  check_duplicate_email() {
    const email = this.form.get('email')?.value
  
  }

checkOnSubmit(){
  const email = this.form.get('email')?.value

  const user: User = {
      givenName: this.form.get('givenName')?.value || '',
      surName: this.form.get('surName')?.value || '',
      email: this.form.get('email')?.value || '',
      password: this.form.get('password')?.value || ''
   
  }
      if(email) {
        this.userService.check_duplicate_emails(email).subscribe({
            next: (response) => {
              this.userService.registerUser(user).subscribe({
                next: (response) => {
                console.log("No errors",response)
                this.registrationStatus = {success : true , message: response.msg}
            },
            error: (response) => {
              console.log("Errors" , response)
              let message = response.error.msg;
              this.registrationStatus = {success: false , message: message}
            }
        })
      },
      error: (response) => {
          console.log("Wrong", response.error.msg)
      }
  })
}
}
}