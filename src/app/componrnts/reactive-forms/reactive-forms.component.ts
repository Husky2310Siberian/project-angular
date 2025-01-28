import { Component } from '@angular/core';
import { ReactiveFormStructureComponent } from '../../components/reactive-forms/reactive-form-structure/reactive-form-structure.component';
import { PersonTableComponent } from '../../components/person-table/person-table.component';
import { SimpleDatatableComponent } from '../../components/simple-datatable/simple-datatable.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormStructureComponent , PersonTableComponent , SimpleDatatableComponent],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  currentPerson: EPerson | undefined

  onPerson(person : EPerson){
    console.log("Parent>>>>" , person)
    this.currentPerson = person;
    ManyPerson.push(person);
    
  }
}
