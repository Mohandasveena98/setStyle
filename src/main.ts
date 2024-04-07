import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { setStyle } from '../projects/set-style/src/lib/set-style.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [setStyle],
  template: `
    <h1 setStyle [css]="style">Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
  style = {
    color: 'purple',
    'font-family': 'georgia',
    'font-weight': 'bold',
    'background-color': 'red',
  };
}

bootstrapApplication(App);
