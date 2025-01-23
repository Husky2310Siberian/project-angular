import { Component, input } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-event-bind',
  imports: [],
  templateUrl: './event-bind.component.html',
  styleUrl: './event-bind.component.css'
})
export class EventBindComponent {
  times : number = 0;
  userInput : String = '';

  incrementTimes(){
    this.times++;
  }

  decrementTimes() {
    this.times--;
  }

  resetTimes(){
    this.times = 0;
  }

  onUserInPut(event : Event) {
    this.userInput = (event.target as HTMLInputElement).value;

  }

}
