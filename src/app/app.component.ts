import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './shared/interfaces/person';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { EventBindComponent } from './components/event-bind/event-bind.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , PersonTableComponent , EventBindComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example-3';

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

  users: Person[] = 
    [
      {
        "givenName": "Maria",
        "surName": "Griffin",
        "email": "maria@yahoo.com",
        "age": 43,
        "address": "Hot Sulphur Springs"
      },
      {
        "givenName": "Lillian",
        "surName": "Cox",
        "email": "l.m.cox95@live.com",
        "age": 73,
        "address": "New Britain"
      },
      {
        "givenName": "Abigail",
        "surName": "Price",
        "email": "abigail_michelle@live.com",
        "age": 23,
        "address": "Sulphur"
      },
      {
        "givenName": "Kevin",
        "surName": "Kelly",
        "email": "kevinkelly@yahoo.com",
        "age": 35,
        "address": "Kersey"
      },
      {
        "givenName": "Taylor",
        "surName": "Cook",
        "email": "taylormaycook@aol.com",
        "age": 28,
        "address": "Lake Orion"
      },
      {
        "givenName": "Nicole",
        "surName": "Bell",
        "email": "nicole.bell@rocketmail.com",
        "age": 40,
        "address": "Iowa Falls"
      },
      {
        "givenName": "Erin",
        "surName": "Ramirez",
        "email": "e.j.ramirez@gmail.com",
        "age": 36,
        "address": "South Kortright"
      },
      {
        "givenName": "Kyle",
        "surName": "Washington",
        "email": "kyle_j_washington@gmail.com",
        "age": 65,
        "address": "Cedar Rapids"
      },
      {
        "givenName": "Samantha",
        "surName": "Peterson",
        "email": "samanthapeterson@outlook.com",
        "age": 73,
        "address": "Schenectady"
      },
      {
        "givenName": "Brittany",
        "surName": "Johnson",
        "email": "brittany_r_johnson@rocketmail.com",
        "age": 70,
        "address": "Oklahoma City"
      }
    ]
}