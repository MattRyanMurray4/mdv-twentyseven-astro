import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyPerson, Person } from '@astro/api-interfaces';
import { CosmonautsFacade } from '@astro/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'astro-cosmonauts',
  templateUrl: './cosmonauts.component.html',
  styleUrls: ['./cosmonauts.component.scss'],
})
export class CosmonautsComponent implements OnInit {
  people$: Observable<Person[]> = this.cosmonautsFacade.allCosmonauts$;
  selectedPerson$: Observable<Person> =
    this.cosmonautsFacade.selectedCosmonauts$;
  form: FormGroup;
  constructor(
    private cosmonautsFacade: CosmonautsFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.cosmonautsFacade.loadCosmonauts();
    this.reset();
  }

  selectPerson(person: Person) {
    this.cosmonautsFacade.selectCosmonaut(person.name);
    this.form.patchValue(person);
  }

  reset() {
    this.form.reset();
    this.selectPerson(emptyPerson);
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: [''],
      craft: [''],
    });
  }
}
