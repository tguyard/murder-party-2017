import { Injectable } from '@angular/core';
import { User, UserService } from './users.service';
import { Fragment, Words, FragmentService } from './fragment.service';

@Injectable()
export class SearchService {

  private fragments: Fragment[];
  public tested: string[];

  public constructor(private users: UserService, fragmentService: FragmentService) {
    this.fragments = fragmentService.fragments;
  }

  public setFragments(fragments: Fragment[]) {
    this.fragments = fragments;
  }

  public findAll(idea: string[]) {
    return this.fragments.filter(f => {
      if (f.user !== this.users.getCurrentUser()) {
        return false;
      }
      let found = false;
      for (let i = 0; i < idea.length; ++i) {
        if (f.words[0].find(w => w === idea[i]) !== undefined) {
          found = true;
          if (f.word2 == null) {
            return true;
          }
        }
      }
      if (f.word2 == null || !found) {
        return false;
      }

      for (let j = 0; j < idea.length; ++j) {
        if (f.word2.find(w => w === idea[j]) !== undefined) {
          return true;
        }
      }
      return false;
    });
  }
}
