import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class deezerService {
  
  constructor(private http: HttpClient) { }


searchDeezer(val: any){

  return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${val}`)
  .pipe(
    map(res => res["data"])
  )
} 
}