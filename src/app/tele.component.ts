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

  private plan0 = [
    '0211111201111111111201111111111111111112',
    '73655                                  3',
    '7 111  37                              3',
    '655555 47          47                  3',
    '011111 2027       527                  3',
    '7      3737      3737                  3',
    '7      3737      3737                  3',
    '655555 47        3737                  3',
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
    let orientation = 160;
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

  private getValueAt(from: [number, number]) {
    return this.plan0[from[1]][from[0]];
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
      return [from[0] - 1, from[1]];
      case 1:
      return [from[0], from[1] - 1];
      case 2:
      return [from[0] + 1, from[1]];
      case 3:
      return [from[0], from[1] + 1];
      default:
      throw new Error("What ??");
    }
  }

  private move(from: [number, number], orientation: number, distance) {
    if (distance < 0) {
      throw new Error("distance should be > 0");
    }
    if (from[0] < 0 || from[1] < 0) {
      throw new Error("from should be > 0");
    }

    if (distance === 0) {
      return from;
    }
    const ori = orientation % 4;
    const allowedOrientations = this.getAllowedOrientations(this.getValueAt(from));
    if (allowedOrientations.find(v => v == ori) === null) {
      throw new Error("C'est un mur");
    }
    return this.move(this.moveOne(from, ori), orientation, distance - 1);
  }

  public ok() {
    this.testResult = '';
  }
}

/*

'0211111201111111111201111111111111111112',
'73655                                  3',
'7 111  37                              3',
'655555 47          47                  3',
'011111 2027       527                  3',
'7      3737      3737                  3',
'7      3737      3737                  3',
'655555 47        3737                  3',
'011111 27          37                  3',
'7      365        54655 555 5555 55    3',
'7      3027      301120 120 1201 127   3',
'655555 47365    54   37           37   3',
'011111 27 127  301   37  37  37   37   3',
'0                        37  37   37   3',
'0      365546  4655554655465 465 5465  4',
'0 55   3                 011 20  1111  2',
'0 126  3                 67            3',
'65555554                  67 37        3',
'                           6547        3',
'                              6555555554',


*/
