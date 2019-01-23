import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    public messagesS: MessagesService,
    private readonly afs: AngularFirestore,
    private router: Router
  ) {}

  // init lister for user data
  initAuthListener() {
    const me = this;
    this.afAuth.authState.subscribe((fbUser: firebase.User) => {
      if (fbUser) {
        const usuariosRef = me.afs.firestore
          .collection('Users')
          .doc(fbUser.uid);

        usuariosRef
          .get()
          .then(function(doc) {
            if (doc.exists) {
              me.router.navigate(['/home']);
            } else {
              me.messagesS.showAlert(
                'error',
                'Ups',
                'Algo malo sucede, contacta al administrador'
              );
            }
          })
          .catch(function(error) {
            console.log('catch ' + error);
          });
      }
    });
  } // end ionitAuthListener

  // login with email and password
  loginEmailPassword(email: string, password: string) {
    const me = this;
    this.messagesS.showLoading();
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then()
      .catch(function() {
        me.messagesS.closeLoading();
        me.messagesS.showAlert('error', 'Ups!', 'Datos no válidos');
      });
  } // end loginEmailPassword

  // return actual user
  getUser() {
    return firebase.auth().currentUser;
  } // end getUser
} // end class
