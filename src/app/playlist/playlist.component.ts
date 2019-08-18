import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { deezerService } from '../deezer.service';
import { Song } from '../interfaces/song.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  songs:Array<Object> = [];

  constructor(private PlaylistService : PlaylistService,
              private deezerService: deezerService) { }

  ngOnInit() { 
    
    let playlists = this.PlaylistService.getPlaylists()
    console.log(playlists);
    this.songs = playlists.favorites;
    console.log(this.songs);
    }
}

