import { Component } from '@angular/core';
import { MemoryService } from './memory.service';

@Component({
  selector: 'app-people',
  templateUrl: 'people.component.html'
})
export class PeopleComponent {

  public defaultPeople = [
    {name: 'CONTREMAITRE', value: '☯'},
    {name: 'SOLDAT',       value: '♞'},
    {name: 'AGENT',        value: '☂'},
    {name: 'JOURNALISTE',  value: '★'},
    {name: 'ERUDIT',       value: '☀'},
    {name: 'MONSTRE',      value: '❤'},
    {name: 'TELE',         value: '☢'},
    {name: 'VOYANTE',      value: '☎'},
    {name: 'CHEF',         value: '⚐'},
    {name: 'ESCLAVE',      value: '⚓'},
    {name: 'FLIC',         value: '♬'},
    {name: 'SUPERIEUR',    value: '☘'}
  ];

  constructor(
    public memoryService: MemoryService
  ) {}
}
