import { Component } from '@angular/core';
import { MemoryService } from './memory.service';
import { FragmentService } from './fragment.service';
import { User } from './users.service';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html'
})
export class AdminComponent {

  public users = [];
  public origin = window.location.origin;
  constructor(
    public memoryService: MemoryService,
    public fragmentService: FragmentService,
  ) {

    const users: {[name: string]: {w: string[], u: User}} = {};
    for (let i = 0; i < fragmentService.fragments.length; ++i) {
      const f = fragmentService.fragments[i];
      users[f.user.name] = {
        w: f.words[0].concat(users[f.user.name] != null ? users[f.user.name].w : []),
        u: f.user
      };
    }

    for (const name in users) {
      if (users.hasOwnProperty(name)) {
        this.users.push({
          user: users[name].u,
          mots: users[name].w.filter((v, index) => users[name].w.indexOf(v) === index)
        });
      }
    }
  }
}
