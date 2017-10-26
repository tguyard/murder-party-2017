import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-root',
  template: `
   <router-outlet></router-outlet>
 `
})
export class AppComponent {
  constructor(route: ActivatedRoute) {
    route.queryParamMap
         .filter(m => m.has('userId'))
         .map(m => m.get('userId'))
         .subscribe(userId => localStorage.setItem('userId', userId));

    route.queryParamMap
        .filter(m => m.has('name'))
        .map(m => m.get('name'))
        .subscribe(userId => localStorage.setItem('name', userId));
  }
}
