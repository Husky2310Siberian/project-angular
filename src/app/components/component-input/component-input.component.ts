import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input',
  imports: [PersonTableComponent],
  templateUrl: './component-input.component.html',
  styleUrl: './component-input.component.css'
})
export class ComponentInputComponent {

  person0 : Person = {
    givenName : "Name1",
    surName : "Surname1",
    age : 33,
    email : "example1@example.com",
    address : "address1"
  }

  person1 : Person = {
    givenName : "Name2",
    surName : "Surname2",
    age : 11,
    email : "example2@example.com",
    address : "address2"
  }

}
