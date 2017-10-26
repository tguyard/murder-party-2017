import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemoryService } from './memory.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  template: `
   <router-outlet></router-outlet>
 `
})
export class AppComponent {
  constructor(route: ActivatedRoute, memoryService: MemoryService) {
    route.queryParamMap
         .filter(m => m.has('userId'))
         .map(m => m.get('userId'))
         .subscribe(userId => {
           localStorage.setItem('userId', userId);
           memoryService.initPeople();
         });

    route.queryParamMap
        .filter(m => m.has('name'))
        .map(m => m.get('name'))
        .subscribe(userId => localStorage.setItem('name', userId));
  }
}
