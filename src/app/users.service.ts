import { Injectable } from '@angular/core';

export class User {
  constructor(
    public name: string,
    public id: string,
    public avatar: string,
  ){}
}


@Injectable()
export class UserService {
  public testUser = new User('John Doe', 'WMbmn', 'avatar-test');

  public chef = new User('Superintendant Battle', 'wduSg', 'avatar-chef');
  public artificier = new User('Parker Pyne', 'oYwfm', 'avatar-artificier');
  public telekinesiste = new User('Jane Doe', 'pVObb', 'avatar-telekinesiste');
  public voyant = new User('Ariadne Oliver', 'wvJZn', 'avatar-voyant');
  public voleur = new User('Jane Marple', 'lQadB', 'avatar-voleur');
  public erudit = new User('Arthur Hastings', 'PJyKU', 'avatar-erudit');
  public monstre = new User('Colonel Race', 'fkBqe', 'avatar-monstre');
  public notable = new User('Eustace Pedler', 'Dotrh', 'avatar-notable');

  public getCurrentUser() {
    const id = localStorage.getItem('userId') || '';

    const user = [
      this.testUser,
      this.chef,
      this.artificier,
      this.telekinesiste,
      this.voyant,
      this.voleur,
      this.erudit,
      this.monstre,
      this.notable,
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
