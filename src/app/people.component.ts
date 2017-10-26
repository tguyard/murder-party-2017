import { Component } from '@angular/core';
import { MemoryService } from './memory.service';

@Component({
  selector: 'app-people',
  templateUrl: 'people.component.html'
})
export class PeopleComponent {

  constructor(
    public memoryService: MemoryService
  ) {


  }
}
