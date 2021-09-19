import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Person } from '@astro/api-interfaces';

@Component({
  selector: 'astro-cosmonaut-details',
  templateUrl: './cosmonaut-details.component.html',
  styleUrls: ['./cosmonaut-details.component.scss'],
})
export class CosmonautDetailsComponent {
  currentPerson: Person;
  originalName: string;

  @Input() set person(value: Person | null) {
    if (value) this.originalName = value.name;
    this.currentPerson = Object.assign({}, value);
  }

  @Input() form: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  save(person: Person) {
    this.saved.emit(person);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    if (formDirective.invalid) return;
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
