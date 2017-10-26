import { Injectable } from '@angular/core';
import { User, UserService } from './users.service';
import { Fragment, Words, FragmentService } from './fragment.service';
import * as random from 'random-seed';
// require('random-seed');

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

  public defaultPeople = [];
  public pouvoirUnlocked = false;

  public initPeople() {
    const init = ['☯', '♞', '☂', '☀', '★', '☢', '❤', '☎', '⚓', '⚐', '♬', '☘'];
    let index = 0;

    if (localStorage.getItem('userId') != null) {
      const r = random.create(localStorage.getItem('userId'));
      index = r.range(init.length);
    }

    this.people = {
      CONTREMAITRE: init[index++ % init.length],// + ' CONTREMAITRE',
      SOLDAT:       init[index++ % init.length],// + ' SOLDAT',
      AGENT:        init[index++ % init.length],// + ' AGENT',
      ERUDIT:       init[index++ % init.length],// + ' ERUDIT',
      JOURNALISTE:  init[index++ % init.length],// + ' JOURNALISTE',
      TELE:         init[index++ % init.length],// + ' TELE',
      MONSTRE:      init[index++ % init.length],// + ' MONSTRE',
      VOYANTE:      init[index++ % init.length],// + ' VOYANTE',
      ESCLAVE:      init[index++ % init.length],// + ' ESCLAVE',
      CHEF:         init[index++ % init.length],// + ' CHEF',
      FLIC:         init[index++ % init.length],// + ' FLIC',
      SUPERIEUR:    init[index++ % init.length],// + ' SUPERIEUR'
    };

    this.defaultPeople = [
      {name: 'CONTREMAITRE', value: this.people.CONTREMAITRE},
      {name: 'SOLDAT',       value: this.people.SOLDAT},
      {name: 'AGENT',        value: this.people.AGENT},
      {name: 'JOURNALISTE',  value: this.people.JOURNALISTE},
      {name: 'ERUDIT',       value: this.people.ERUDIT},
      {name: 'MONSTRE',      value: this.people.MONSTRE},
      {name: 'TELE',         value: this.people.TELE},
      {name: 'VOYANTE',      value: this.people.VOYANTE},
      {name: 'CHEF',         value: this.people.CHEF},
      {name: 'ESCLAVE',      value: this.people.ESCLAVE},
      {name: 'FLIC',         value: this.people.FLIC},
      {name: 'SUPERIEUR',    value: this.people.SUPERIEUR}
    ];

    return this.people;

  }

  constructor(fragmentService: FragmentService) {

    this.initPeople();


    const ids = (JSON.parse(localStorage.getItem('fragments')) || []) as string[];
    this.saved = ids.map(id => fragmentService.getById(id));
  }

  public save(fragment: Fragment) {
    if (this.saved.find(f => f != null && fragment.id === f.id) == null) {
      this.saved.push(fragment);
      this.saved.sort((a, b) => a.order - b.order);
      localStorage.setItem('fragments', JSON.stringify(this.saved.filter(f => f != null).map(f => f.id)));
    }
  }

  public clear() {
    this.saved = [];
    localStorage.removeItem('fragments');
  }
}
