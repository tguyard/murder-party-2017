import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
  <i class="fa fa-bars" aria-hidden="true" (click)="isOpen = true"></i>
  <nav id="main-nav" [ngClass]="{open: isOpen}">
    <ul>
      <li class="align-right"><a (click)="isOpen = false">Fermer</a></li>
      <li><a href="#/memory">Ma mémoire</a></li>
      <li><a href="#/search">Se creuser la tête</a></li>
      <li><a href="#/people">Qui est qui ?</a></li>
    </ul>
  </nav>
  `,
  styleUrls: ['menu.component.sass']
})
export class MenuComponent {
  isOpen = false;
}
