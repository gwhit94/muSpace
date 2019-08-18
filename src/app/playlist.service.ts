import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  
  addUserId(id){
    console.log("Playlist Service addUserId function")
  }
  
  constructor() { }

}