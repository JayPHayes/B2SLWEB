import { Component, OnInit } from '@angular/core';
import { AngularFireAuth  } from "angularfire2/auth";

import { AngularFireDatabaseModule } from "angularfire2/database";
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) { }

  onSubmit(formData){
    console.log('XXXXXXXXXX formData', formData)

    if(formData.valid){
      console.log("XXXXXX Valid: ", formData.valid);
      this.af.auth.createUserWithEmailAndPassword(formData.value.txtEmail, formData.value.txtPassword)
      .then(
        (success) => {
          console.log(success);
          this.router.navigate(['studentlist']);
        })
      .catch(
        (err) => {
          
          this.error = err;
          console.log("XXXXXXXX: ", this.error);
        }
      );

    }
  }

  ngOnInit() {
  }
  
}
