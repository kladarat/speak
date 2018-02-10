import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../firebase.config';
import * as firebase from 'firebase/app';
import { ProfileInfo } from '../models/profile-info';

@Injectable()
export class FirebaseServiceService {
  constructor(public afAuth: AngularFireAuth) { }

  loginWithFacebook(): Promise<ProfileInfo> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
