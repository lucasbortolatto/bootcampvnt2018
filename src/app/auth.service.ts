import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService implements CanActivate {

  canActivate() {
    console.log('CanActivate was called');
    return true;
  }

  constructor(private afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  }

  logout() {
    this.afAuth.auth.signOut();

  }
}
