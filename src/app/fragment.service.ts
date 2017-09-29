import { Injectable } from '@angular/core';
import { User, UserService } from './users.service';
import * as md5 from 'md5';

export type Words = string[];

export class Fragment {
  public words: [Words, Words, Words];
  public id: string;
  public isOpened = false;

  constructor(
    public user: User,
    w1: Words,
    w2: Words,
    w3: Words,
    public title: string,
    public details: string,
  ){
    this.words = [w1, w2, w3];
    this.id = md5(w1[0], w1[1], w1[2]);
  }
}


@Injectable()
export class FragmentService {

  public fragments: Fragment[] = [];

  constructor(userService: UserService) {
    this.fragments.push(new Fragment(userService.testUser,
      ['hello', 'helo', 'bonjour', 'coucou', 'hi'],
      ['world', 'le monde', 'monde', 'word', 'tout le monde'],
      ['exclamation', '!', '!!', '!?'],
      `Mon nom est <strong>${userService.testUser.name}</strong>`,
      `<h1>Mémoire de test: Hello world !</h1>
      <p>Voici comment j'ai réussi à retrouver mon nom.<p>
      <p>Bla bla bla<p>`));

    this.fragments.push(new Fragment(userService.testUser,
      ['test', 'tester', 'testeur', 'tests'],
      ['utilisateur', 'user', 'personne', 'compte'],
      ['identité', 'moi', 'etre'],
      `Je suis un utilisateur de test`,
      ``));

  }


  public getById(id: string) {
    return this.fragments.find(f => f.id === id);
  }
}
