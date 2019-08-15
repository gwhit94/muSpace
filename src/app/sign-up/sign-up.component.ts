import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  username: string;
  password: string;
  passwordRepeat: string;
  email: string;

  constructor(private registrationService: RegistrationService) { }

  register(){
    if (this.password != this.passwordRepeat){
      console.log("Passwords do not match");
      return;
    }
    this.registrationService.signUpUser(this.username, this.password, this.email);
  }

  ngOnInit() {
  }

}
