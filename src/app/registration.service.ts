import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  authenticated: boolean = false;

  constructor(private router: Router) { }

  loginUser(username, password){
    if (localStorage.getItem('username') != username || localStorage.getItem('password') != password){
      console.log("Username or Password is incorrect. Please try again.");
      return;
    };
    this.authenticated = true;
    console.log(`Logged in User: ${username}!`);
    this.router.navigate(['music-player']);
  }

  logoutUser(){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('email');
    this.authenticated = false;
    console.log("user logged out");
  }
  // u = username, p = password, e = email
  signUpUser(u, p, e){
    localStorage.setItem('username', u);
    localStorage.setItem('password', p);
    localStorage.setItem('email', e);
    console.log("user registered!");
    this.router.navigate(["login"]);
  }

  isAuth(){
    return this.authenticated;
  }

  // getUsers(){

  // }





}
