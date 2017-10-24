import { Component } from '@angular/core';

type IncantationMot = 'gadoola'|'boo'|'bobidi'|'bibidi'|'la'|'sala';

@Component({
  selector: 'app-tele',
  templateUrl: 'tele.component.html'
})
export class TeleComponent {

  public incantation = '';
  public mots: IncantationMot[] = [];
  public testResult = '';

  constructor(
  ) {}

  public add(mot: IncantationMot) {
    this.mots.push(mot);
    this.incantation += mot + ' ';
  }

  public clear() {
    this.mots = [];
    this.incantation = ' ';
  }

  public tester() {
    if (this.mots.length === 0) {
      this.testResult = 'empty';
      return;
    }
    if (this.mots.length < 4) {
      this.testResult = 'tooshort';
      return;
    }
    if ((this.mots[0] !==  'gadoola' && this.mots[0] !== 'sala') ||
        (this.mots[this.mots.length - 1] !==  'gadoola' && this.mots[this.mots.length - 1] !== 'sala') ||
        (this.mots[0] ===   this.mots[this.mots.length - 1])) {
      this.testResult = 'wrong';
      return;
    }
    let orientation = 80;
    let vitesse = 0;
    let distance = 0;
    for (let i = 1; i < this.mots.length - 1; ++i) {
      switch (this.mots[i]) {
        case 'gadoola':
        this.testResult = 'wrong';
        return;
        case 'boo':
        vitesse += 1;
        break;
        case 'bobidi':
        orientation -= 1;
        break;
        case 'bibidi':
        orientation += 1;
        break;
        case 'la':
        if (vitesse === 0) {
          this.testResult = 'wrong';
          return;
        }
        distance += vitesse;
        break;
        case 'sala':
        this.testResult = 'wrong';
        return;
      }
    }
  }

  public ok() {
    this.testResult = '';
  }
}
