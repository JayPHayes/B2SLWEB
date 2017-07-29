import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
 state: string = "";
  error: any;

  constructor(public af:AngularFireAuth, private router: Router) { 
    this.af.authState.subscribe(auth => {
      console.log("auth: ", auth)
      if(auth){
        this.router.navigateByUrl('/studentlist');
      }
    });
  }

  onSubmit(formData){
    if(formData.valid){
      console.log(formData.value)

      this.af.auth.signInWithEmailAndPassword(formData.value.txtEmail, formData.value.txtPassword)
      .then(
        (success) => {
          console.log(success)

          this.router.navigate(['/studentlist']);
        }
      )
      .catch(
        (err) => {
          console.log(err);
          this.error = err;
        }
      );
    }
  }

  ngOnInit() {
  }
}
