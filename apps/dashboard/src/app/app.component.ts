import { Component } from '@angular/core';

@Component({
  selector: 'astro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'COSMO-APP';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'cosmonauts', icon: 'view_list', title: 'Cosmonauts' },
  ];
}
