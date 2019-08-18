import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch} from '../Helper/Match.validator'
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
    if (this.signupForm.invalid){
      console.log("Fix your Errors Bitch");
      return;
    }


    this.registrationService.signUpUser(this.username, this.password, this.email,this.nickname);
  }
  get username(){
    return this.signupForm.get('username')
  }

  get email(){
    return this.signupForm.get('email')
    }

    get emailConfirm(){
      return this.signupForm.get('emailConfirm')
    }

  get password(){
    return this.signupForm.get('password')
  }

  get passwordRepeat(){
    return this.signupForm.get('passwordRepeat')
  }

  get nickname(){
    return this.signupForm.get('nickname')
  }





  ngOnInit() {
  this.signupForm = this.formBuilder.group({
  username: ['', Validators.required],
  nickname: "",
  password: ['', [Validators.required, Validators.minLength(8)]],
  passwordRepeat: ['', [Validators.required, Validators.minLength(8)]],
  email: ['', [Validators.required, Validators.email]],
  emailConfirm: ['', [Validators.required, Validators.email]],
  },{
    validator: [mustMatch('password', 'passwordRepeat'),
     mustMatch('email', 'emailConfirm'),]

})
  }

}
