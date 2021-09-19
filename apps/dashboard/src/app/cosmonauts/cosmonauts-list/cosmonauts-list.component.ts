import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '@astro/api-interfaces';

@Component({
  selector: 'astro-cosmonauts-list',
  templateUrl: './cosmonauts-list.component.html',
  styleUrls: ['./cosmonauts-list.component.scss'],
})
export class CosmonautsListComponent {
  @Input() people: Person[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
}
