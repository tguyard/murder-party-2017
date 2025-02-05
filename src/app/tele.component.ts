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
  public position: [number, number] = [0, 0];
  public currentLevelIndex = 0;
  public orientation = 0;

  private origin: [number, number] = [19, 13];
  private levels = [[
    '0211111201111111111201111111111111111112',
    '73655                                  3',
    '7 111  37                              3',
    '655555 471        547                  3',
    '011111 2027      3027                  3',
    '7      3737      3737                  3',
    '7      3737      3737                  3',
    '655555 47          37                  3',
    '011111 27          37                  3',
    '7      365        54655 555 5555 55    3',
    '7      3027      301120 120 1201 127   3',
    '655555 47365    547  37           37   3',
    '011111 27 127  301   37  37  37   37   3',
    '0                  X     37  37   37   3',
    '0      365546  4655554655465 465 5465  4',
    '0 55   3                 011 20  1111  2',
    '0 126  3                 67            3',
    '65555554                  67 37        3',
    '                           6547        3',
    '                              6555555554',
  ], [
    'x  0112011111111111111120112',
    '   7      55555555         3',
    '   655437301111112737  365 4',
    '   0112373        737  301 2',
    '   7   373        737      3',
    '   7  3373        736 5465 4',
    '   6554373        73030120 2',
    '   011136455555555647   27 3',
    '   7   3            73  37 3',
    '   65554            7 120  3',
    '                    7  37  3',
    '                    7      3',
    '                    7  37  3',
    '                    7  37  3',
    '                    65546554',
  ], [
    '01110112',
    '7 54   3',
    '7      3',
    '7      3',
    '65555554',
  ], [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
       '  012',
       '  7 3',
       '  7 3',
       '  653',
       '  654',
  ]];

  public parcour = '';
  public currentParcour: string[] = [];
  private emptyLevel = [
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
  ];

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
    let orientation = 160 + this.orientation;
    let vitesse = 0;
    let position: [number, number] = this.origin.slice() as any;
    this.currentParcour = this.emptyLevel.slice();
    this.currentLevelIndex = 0;
    console.log(position, orientation, this.currentParcour);
    for (let i = 1; i < this.mots.length - 1; ++i) {
      switch (this.mots[i]) {
        case 'gadoola':
        this.testResult = 'wrong';
        return;
        case 'boo':
        vitesse += 1;
        break;
        case 'bobidi':
        vitesse = 0;
        orientation -= 1;
        break;
        case 'bibidi':
        vitesse = 0;
        orientation += 1;
        break;
        case 'la':
        if (vitesse === 0) {
          this.testResult = 'wrong';
          return;
        }
        try {
          position = this.move(position, orientation, vitesse);
        } catch (e) {
          this.testResult = 'wall';
          console.log(e);
          return;
        }

        break;
        case 'sala':
        this.testResult = 'wrong';
        return;
      }
    }

    this.position = position;
    this.parcour = this.currentParcour.join('\n');
    this.testResult = 'position';
  }

  private getValueAt(from: [number, number]) {
    return this.levels[this.currentLevelIndex][from[1]][from[0]];
  }

  private getAllowedOrientations(value: string) {
    if (value == null) {
      return [];
    }
    switch (value) {
      case '0':
      return [2, 3];
      case '1':
      return [1, 2, 3];
      case '2':
      return [1, 2];
      case '3':
      return [0, 1, 2];
      case '4':
      return [0, 1];
      case '5':
      return [0, 1, 3];
      case '6':
      return [0, 3];
      case '7':
      return [0, 2, 3];
      default:
      return [0, 1, 2, 3];
    }
  }

  private moveOne(from: [number, number], ori: number): [number, number] {
    switch (ori) {
      case 0:
      return [from[0], from[1] - 1];
      case 1:
      return [from[0] - 1, from[1]];
      case 2:
      return [from[0], from[1] + 1];
      case 3:
      return [from[0] + 1, from[1]];
      default:
      throw new Error('What ??');
    }
  }

  private move(from: [number, number], orientation: number, distance) {

    if (distance < 0) {
      throw new Error('distance should be > 0');
    }
    if (from[0] < 0 || from[1] < 0) {
      throw new Error('from should be > 0');
    }

    const tmp = this.currentParcour[from[1]];
    this.currentParcour[from[1]] = tmp.substr(0, from[0]) + 'x' + tmp.substr(from[0] + 1);

    if (distance === 0) {
      return from;
    }
    const ori = orientation % 4;
    console.log('move', from, distance, ori, this.getValueAt(from));
    const allowedOrientations = this.getAllowedOrientations(this.getValueAt(from));
    if (allowedOrientations.find(v => v == ori) === undefined) {
      throw new Error('C\'est un mur');
    }
    const p = this.moveOne(from, ori);
    if (this.currentLevelIndex === 0 || this.currentLevelIndex === 1) {
      if (p[1] === 5 && (p[0] === 8 || p[0] === 9 || p[0] === 18 || p[0] === 19)) {
        this.currentLevelIndex = this.currentLevelIndex === 0 ? 1 : 0;
      }
    } else if (this.currentLevelIndex === 0 || this.currentLevelIndex === 2) {
      if (p[0] === 3 && (p[1] === 0 || p[1] === 1)) {
        this.currentLevelIndex = this.currentLevelIndex === 0 ? 2 : 0;
      }
    } else if (this.currentLevelIndex === 0 || this.currentLevelIndex === 3) {
      if (p[0] === 1 && p[1] === 17) {
        this.currentLevelIndex = this.currentLevelIndex === 0 ? 3 : 0;
      }
    }
    return this.move(p, orientation, distance - 1);
  }

  public ok() {
    this.testResult = '';
    this.position = [0, 0];
  }
}
