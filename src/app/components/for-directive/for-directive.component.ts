import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive',
  imports: [PersonTableComponent],
  templateUrl: './for-directive.component.html',
  styleUrl: './for-directive.component.css'
})
export class ForDirectiveComponent {

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
