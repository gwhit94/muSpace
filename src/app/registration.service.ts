import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './interfaces/user.interface';
import { MatHeaderRowDef } from '@angular/material';
import { Playlist } from './interfaces/playlist.interface';
import { PlaylistService } from './playlist.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private authenticated: boolean = false;

  constructor(private router: Router, private playlistService: PlaylistService) {
    // creates a default user
    let newUser = [{
      username: "username",
      userId: 1, 
      password: "password",
      email: "username@gmail.com",
      nickname: "User"
      }];
    localStorage.setItem('users', JSON.stringify(newUser));
    localStorage.setItem('nextId', "1");
   }
  
 
  loginUser(username, password){
    let users = JSON.parse(localStorage.getItem("users"));
    // Makes sure there is a user registered to attempt login
    let userToLoginArray = users.filter(user => user.username == username);
    let userToLogin = userToLoginArray[0];
    // if (!userToLogin){
    //   console.log("no such user registered!");
    //   return;
    // }

    // password check
    if (!userToLogin || userToLogin.password != password){
      console.log("Username or Password is incorrect. Please try again.");
      return;
    };
    this.authenticated = true;
    console.log(users);
    console.log(`Logged in User: ${username}!`);

    let users = JSON.parse(localStorage.getItem("users"));
    let id = users.find(users => users.username === username).userId;
    console.log(id);
    localStorage.setItem('currentId', id.toString());
    this.router.navigate(['music-player']);
  }
  // // Need to setup a logged in user state to be cleared on logout and provide nickname etc. when asked

  logoutUser(){

    this.authenticated = false;
    console.log("user logged out");
  }

  // u = username, p = password, e = email, n = nickname
  signUpUser(u, p, e, n){
    let users = JSON.parse(localStorage.getItem("users"));
    let nextId = parseInt(localStorage.getItem("nextId"));

    // exit sign up if username taken
    let nameTaken: boolean;
    nameTaken = false;
    
    users.forEach(user => {
      if (user.username === u){
        nameTaken = true;
        return;
      }
    });
    if (nameTaken){
      console.log(`This username "${u}" has already been taken!`);
      return;
<<<<<<< HEAD
=======

>>>>>>> ffbd3f7c080e34f322e2e2c21fbc990e06995a5d
    }
    console.log(`Registed username "${u}" !`);

    // increments nextId then creates new user
<<<<<<< HEAD
    nextId++
    let newUser = {
      username: u,
      userId: nextId, 
      password: p,
      email: e,
      nickname: n,
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem('nextId', nextId.toString());
    this.playlistService.addUserId(nextId);
    this.router.navigate(['login']);
=======
>>>>>>> ffbd3f7c080e34f322e2e2c21fbc990e06995a5d

    };


  isAuth(){
    return this.authenticated;
  }

  // getUsers(){

  // }





}
