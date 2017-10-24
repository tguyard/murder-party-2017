import { Component } from '@angular/core';
import { MemoryService } from './memory.service';

@Component({
  selector: 'app-memory',
  templateUrl: 'memories.component.html',
  styleUrls: ['./memory.component.sass']
})
export class MemoryComponent {
  constructor(
    public memoryService: MemoryService
  ) {}
}
