import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private router: Router) { }

  loginUser(username){
    localStorage.setItem('username', username);
    this.router.navigate(['player']);
  }

  // logoutUser(){

  // }
  // signUpUser(){

  // }

  // getUsers(){

  // }





}
