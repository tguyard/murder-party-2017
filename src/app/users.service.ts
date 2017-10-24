import { Injectable } from '@angular/core';

export class User {
  constructor(
    public name: string,
    public id: string,
    public avatar: string,
  ) {}
}


@Injectable()
export class UserService {
  public chef = new User('Chef', 'wduSg', 'avatar-chef');
  public soldat = new User('soldat', 'oYwfm', 'avatar-soldat');
  public erudit = new User('erudit', 'PJyKU', 'avatar-erudit');
  public tele = new User('tele', 'pVObb', 'avatar-tele');
  public voyant = new User('voyant', 'wvJZn', 'avatar-voyant');
  public journalist = new User('journalist', 'Dotrh', 'avatar-journalist');
  public monstre = new User('monstre', 'fkBqe', 'avatar-monstre');

  public getCurrentUser() {
    const id = localStorage.getItem('userId') || '';

    const user = [
      this.chef,
      this.soldat,
      this.tele,
      this.voyant,
      this.erudit,
      this.monstre,
      this.journalist,
    ].find(u => u.id === id);
    if (user == null) {
      throw new Error('User should not be null !');
    }
    return user;
  }
}

// yVdSJ
// oXgbW
// OOcDO
// jyQfF
// yyfJq
// tmzTU
// ttARA
// IIEvH
// VjxGA
// XmXgW
// ipEfL
// jLtIT
// Jzayt
// oBiby
// xeZBM
// tbPLp
// yXsFO
// vXFYT
// WBWCG
// cSecz
// tUaVi
// nXUUO
// uYmPt
// ILOBT
// jisFt
// adReP
// PgXVE
// RbSmn
// hbejT
// UgTNN
// GPhYu
// ZhwcV
// phMcS
// sDCpm
// JYjJI
// wKaXT
