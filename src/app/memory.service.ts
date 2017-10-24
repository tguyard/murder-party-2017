import { Injectable } from '@angular/core';
import { User, UserService } from './users.service';
import { Fragment, Words, FragmentService } from './fragment.service';

@Injectable()
export class MemoryService {
  public saved: Fragment[] = [];

  public people = {
    CONTREMAITRE: '☯',
    SOLDAT:  '♞',
    AGENT:  '☂',
    ERUDIT:  '☀',
    JOURNALISTE:  '★',
    TELE:  '☢',
    MONSTRE:  '❤',
    VOYANTE:  '☎',
    ESCLAVE:  '⚓',
    CHEF:  '⚐',
    FLIC:  '♬',
    SUPERIEUR: '☘'
  };

  constructor(fragmentService: FragmentService) {
    const ids = (JSON.parse(localStorage.getItem('fragments')) || []) as string[];
    this.saved = ids.map(id => fragmentService.getById(id));
  }

  public save(fragment: Fragment) {
    if (this.saved.find(f => f != null && fragment.id === f.id) == null) {
      this.saved.push(fragment);
      this.saved.sort((a, b) => a.order - b.order);
      localStorage.setItem('fragments', JSON.stringify(this.saved.map(f => f.id)));
    }
  }

  public clear() {
    this.saved = [];
    localStorage.removeItemsetItem('fragments');
  }
}
