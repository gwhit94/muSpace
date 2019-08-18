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
  

  constructor(private router: Router, private playlistService: PlaylistService) { }

  loginUser(username, password){
    if (localStorage.getItem('username') != username || localStorage.getItem('password') != password){
      console.log("Username or Password is incorrect. Please try again.");
      return;
    };
    this.authenticated = true;
    console.log(JSON.parse(localStorage.getItem("users")));
    console.log(`Logged in User: ${username}!`);

    let users = JSON.parse(localStorage.getItem("users"));
    let id = users.find(users => users.username === username).userId;
    console.log(id);
    localStorage.setItem('currentId', id.toString());
    this.router.navigate(['music-player']);
  }

  logoutUser(){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('email');
    localStorage.removeItem('nickname');
    this.authenticated = false;
    console.log("user logged out");
  }
  // u = username, p = password, e = email, n = nickname
  signUpUser(u, p, e, n){
    console.log("user registered!");
 

    if (localStorage.getItem("users") === null){
      let newUser = [{
        username: "username",
        userId: 1, 
        password: "password",
        email: "username@gmail.com",
        nickname: "User"
        }]
      localStorage.setItem('users', JSON.stringify(newUser));
      localStorage.setItem('nextId', "1");
    }

    let users = JSON.parse(localStorage.getItem("users"));
    let nextId = parseInt(localStorage.getItem("nextId"));
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
        this.playlistService.addUserId(nextId);

    };


  isAuth(){
    return this.authenticated;
  }

  // getUsers(){

  // }





}
