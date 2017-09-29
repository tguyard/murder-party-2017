import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { URLSearchParams } from '@angular/http';

import { SearchService } from './search.service';
import { Fragment } from './fragment.service';
import { MemoryService } from './memory.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html'
})
export class SearchComponent {

  public fragment: Fragment|null = null;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private memoryService: MemoryService,
  ){
  }

  public onChange(text: string) {
    const words = text.toLowerCase()
                      .replace(/[\n\r]+/gm, '|')
                      .split('|')
                      .filter(w => w.length > 0)
                      .map(w => w.trim())
                      .sort();
    if (words.length === 3) {
      this.fragment = this.searchService.find(words);
      if (this.fragment != null) {
        this.memoryService.save(this.fragment);
      }
    } else {
      this.fragment = null;
    }
  }

  public gotoFragment() {
    if (this.fragment != null) {
      this.router.navigate(['fragment', this.fragment.id]);
    }
  }
}
