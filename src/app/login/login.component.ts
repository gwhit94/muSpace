import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { SpongebobPipe } from '../spongebob.pipe'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  text = "enter a username AND password please";


  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }
  login(){
    if (!this.username || !this.password){
      console.log(this.text);
      return;
    }
    this.registrationService.loginUser(this.username, this.password);
  }

}
