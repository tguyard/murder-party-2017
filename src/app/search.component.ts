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

  public fragments: Fragment[] = [];
  public hasTxt = false;

  constructor(
    private searchService: SearchService,
    private router: Router,
    public memoryService: MemoryService,
  ) {
  }

  public onChange(text: string) {
    if (text === "pouvoir") {
      this.memoryService.pouvoirUnlocked = true;
    }
    this.hasTxt = text.length > 0;
    const words = text.toLowerCase()
                      .replace(/[\n\r ,.;:"_-]+/gm, '|')
                      .split('|')
                      .filter(w => w.length > 0)
                      .map(w => w.trim())
                      .sort();
    this.fragments = this.searchService.findAll(words);
    if (this.fragments.length > 0) {
      for (let i = 0; i < this.fragments.length; ++i) {
        this.memoryService.save(this.fragments[i]);
      }
    }
  }

  public gotoFragment(f: Fragment) {
    if (f != null) {
      this.router.navigate(['fragment', f.id]);
    }
  }
}
