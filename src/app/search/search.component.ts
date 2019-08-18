import { Component, OnInit, Input } from '@angular/core';
import { deezerService } from '../deezer.service';
import { PlaylistService } from '../playlist.service';
import { Observable, interval, fromEvent } from 'rxjs';
import { map, debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
import { getMatIconNoHttpProviderError } from '@angular/material';
import { Button } from 'protractor';
import {HostBinding} from '@angular/core' 
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { AppComponent } from '../app.component';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('openClose', [
      
      state('open', style({
        position: "absolute", left: "80%"
      })),
      state('closed', style({
       position: "absolute", left: "100%"
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})

  


export class SearchComponent implements OnInit {
  
  searchOutput: any;
  newPlaylist: string = "";

  constructor(private deezerService : deezerService,
              private playlistService : PlaylistService        
    ) {
    
  }




  ngOnInit() {
    let playlists: Array<string> = this.playlistService.getPlaylists()
    console.log(playlists);
    const searchBar = document.getElementById("searchBar");
    const inputObs = fromEvent(searchBar, "keyup").pipe(
      map(e => e.target['value']),
      filter(text => text.length > 3),
      debounceTime(400),
      distinctUntilChanged()
      )
    


    

    inputObs.subscribe(val=> 
      this.deezerService.searchDeezer(val).subscribe(res => this.searchOutput = res)
      );
  }
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  addSong(id,title, artist,album,preview, cover) {
    this.playlistService.addSong(id,title, artist,album,preview, cover);
  }
}
