import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson } from '../../shared/interfaces/person';


@Component({
  selector: 'app-component-output-example',
  imports: [SimpleDatatableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  showPersonClicked(person: EPerson) {
    alert(this.personTemplate(person))
  }

  personTemplate(person: EPerson) {
    return `Person Details
    First name: ${person.givenName}
    Last name: ${person.surName}
    Age: ${person.age}
    Email: ${person.email}
    Address: ${person.address}`
  }

}
