import { Injectable } from '@angular/core';
import { User, UserService } from './users.service';
import { Fragment, Words, FragmentService } from './fragment.service';

@Injectable()
export class SearchService {

  private fragments: Fragment[];

  public constructor(private users: UserService, fragmentService: FragmentService) {
    this.fragments = fragmentService.fragments;
  }

  public setFragments(fragments: Fragment[]) {
    this.fragments = fragments;
  }

  public find(idea: string[]) {
    return this.fragments.find(f => {
      console.log(f);
      if (f.user !== this.users.getCurrentUser()) {
        return false;
      }
      return this.matchWords(f.words.slice(), idea.slice());
    });
  }

  private matchWords(words: Words[], idea: string[]) {
    console.log(words.length, idea.length, idea);
    if (words.length === 0 && idea.length === 0) {
      return true;
    }
    for (let i = 0; i < words.length; ++i) {
      for (let j = 0; j < idea.length; ++j) {
        const index = words[i].findIndex(w => w === idea[j]);
        if (index !== -1) {
          words.splice(i, 1);
          idea.splice(j, 1);
          return this.matchWords(words, idea);
        }
      }
    }
    return false;
  }
}
