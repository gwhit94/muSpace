import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class deezerService {
  
  constructor(private http: HttpClient) { }

searchDeezer(val: any){
  console.log("hey this is working", this.http.get(`https://api.deezer.com/search?q=${val}`))
  return this.http.get(`https://api.deezer.com/search?q=${val}`)
  // .pipe(
  //   map(res => res["data"])
  
  // )
}
}