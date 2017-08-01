import { FirebaseSchoolService } from './../servics/firebase-school.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaddComponent implements OnInit {
user: any;
  name: any = "";
  photoURL: string = "";
  state: string = '';

  txtStudenName: string;
  userKey: string = "";
  boyGirl: string = "";


  constructor(public af: AngularFireAuth, private router: Router, private firebaseSvc: FirebaseSchoolService) { 
    this.user = af.authState;
    console.log("this.user: ", this.user);

    af.authState.subscribe(auth => {
      console.log('auth: ', auth)
      if(auth){
        if(auth.displayName){
          this.name = auth.displayName
          this.photoURL = auth.photoURL
          this.userKey = auth.uid;
          
        } else {
          this.name = auth.email
          this.photoURL = "http://www.freeiconspng.com/uploads/profile-icon-9.png";  
        }

      }
    });

  }

  saveStudent(){
    let newStudent = {
      studentName: this.txtStudenName,
      classRoomName: "",
      boyGirl: this.boyGirl
    }

    this.firebaseSvc.addStudent(this.userKey,newStudent);
     this.router.navigateByUrl('/studentlist');
  }

  logout(){
    this.af.auth.signOut();
    console.log('Logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }
}
