import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent {
  title = 'muSpace';
  public isOpen: boolean = false;
}


  