import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  imports: [],
  templateUrl: './event-bind.component.html',
  styleUrl: './event-bind.component.css'
})
export class EventBindComponent {
  times : number = 0;

  incrementTimes(){
    this.times++;
  }

  decrementTimes() {
    this.times--;
  }

  resetTimes(){
    this.times = 0;
  }

}
