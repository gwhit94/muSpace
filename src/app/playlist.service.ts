import { Injectable } from '@angular/core';
import { constructor } from 'minimatch';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  
  addUserId(id){
      if (localStorage.getItem("userPlaylists") === null){
        let userPlaylists = [{
          userId: id, 
          playlists:{
            favorites: [],
            recents: []
            }
          }]

        localStorage.setItem('userPlaylists', JSON.stringify(userPlaylists));
        localStorage.setItem('nextId', "1");
      }
    
      let userPlaylists = JSON.parse(localStorage.getItem("userPlaylists"));
      let newUser = {
        userId: id, 
        playlists:{
          favorites: [],
          recents: []
          }
        }
          userPlaylists.push(newUser);
          localStorage.setItem("userPlaylists", JSON.stringify(userPlaylists));

          console.log("user added to playlists")
      };
  
      getPlaylists(){
        let id: number = Number(localStorage.getItem("currentId"));
        console.log(id);
        let usersPlaylists = JSON.parse(localStorage.getItem("userPlaylists")); 
        // console.log(usersPlaylists);
        let currentplaylists = usersPlaylists.find(users => users.userId === id).playlists;
        // console.log(currentplaylists);
        return currentplaylists
      }

      addPlaylist(newPlaylist){
        let id: number = Number(localStorage.getItem("currentId"));
        console.log(id);
        let usersPlaylists = JSON.parse(localStorage.getItem("userPlaylists")); 
        console.log(usersPlaylists);
        let newUserPlaylists = usersPlaylists.find(users => users.userId === id).playlists.push(newPlaylist);
        console.log(newUserPlaylists);
        localStorage.setItem("userPlaylists", JSON.stringify(newUserPlaylists));
      }

      addSong(id,title, artist,album,preview,cover){

        let songId = {id: id, title: title, artist: artist, album : album, preview: preview,cover}
        console.log("double woot", songId)
        let userId: number = Number(localStorage.getItem("currentId"));
        let usersPlaylists = JSON.parse(localStorage.getItem("userPlaylists")); 
        console.log(usersPlaylists);
        let newUserPlaylists = usersPlaylists
        newUserPlaylists.find(users => users.userId === userId)
        .playlists.favorites.push(songId);


              console.log(usersPlaylists)
              
        localStorage.setItem("userPlaylists", JSON.stringify(newUserPlaylists));
      }
    
  constructor() { }
    
    }


