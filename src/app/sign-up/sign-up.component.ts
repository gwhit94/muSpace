import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch} from '../Helper/Match.validator'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  // username: string;
  // password: string;
  // passwordRepeat: string;
  // email: string;
  // emailConfirm: string;
  signupForm: FormGroup;
  submitted = false;

  constructor(private registrationService: RegistrationService, private formBuilder: FormBuilder) { }

  register(){
    if (this.password != this.passwordRepeat){
      console.log("Passwords do not match");
      return;
    }
     
  
    this.registrationService.signUpUser(this.username, this.password, this.email);
  }

  ngOnInit() {
  this.signupForm = this.formBuilder.group({
  username: ['', Validators.required],
  password: ['', [Validators.required, Validators.minLength(8)]],
  passwordRepeat: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  emailConfirm: ['', [Validators.required, Validators.email]],
  },{
    validator: [MustMatch('password', 'passwordRepeat'),
     MustMatch('email', 'emailConfirm'),]

})
  }

}
