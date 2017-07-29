import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router } from '@angular/router';
import * as firebase from 'firebase/app'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(public af:AngularFireAuth, private router: Router) { 
    this.af.authState.subscribe(auth => {
      if(auth){
        this.router.navigateByUrl('/studentlist')
      }
    });
  }

  loginFb(){
    console.log('PRocess loginFb()')
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider() )
    .then(
      (success) => {
        console.log('Navigate to Studen List')
        this.router.navigate(['/studentlist']);
      })
    .catch(
      (err) => {
        console.log('ERROR: ', err)
        this.error = err;
      }
    );
  }

  loginGoogle(){
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider() )
    .then(
      (success) => {
        this.router.navigate(['/studentlist'])
      })
    .catch(
      (err) => {
        this.error = err;
      }
    );
  }


  ngOnInit() {
  }

}
