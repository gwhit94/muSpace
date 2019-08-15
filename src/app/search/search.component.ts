import { Component, OnInit } from '@angular/core';
import { deezerService } from '../deezer.service';
import { Observable, interval, fromEvent } from 'rxjs';
import { map, debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchOutput: any;

  constructor(private deezerService : deezerService) {
    
  }

  ngOnInit() {
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

}
