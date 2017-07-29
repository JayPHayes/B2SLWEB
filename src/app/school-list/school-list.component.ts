import { Component, OnInit } from '@angular/core';
import { FirebaseSchoolService } from "../servics/firebase-school.service";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router'

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schoolList: any;
  selSchool: any;
  classList: any;

  isSchoolList: boolean = false;

  constructor(private firebaseSvc:FirebaseSchoolService, private router: Router) { }

  ngOnInit() {
    this.firebaseSvc.getSchools().subscribe(schools => {
      
      this.schoolList = schools
      console.log(this.schoolList);
    });
  }

  setClassList(){

  }

  showClassRoomList(school){
    this.isSchoolList = !this.isSchoolList
    this.selSchool = school;
    this.firebaseSvc.getClassRooms(school.$key).subscribe(classRms => {
      console.log('classRms', classRms)
      this.classList = classRms
    });

    // console.log('this.selSchool', this.selSchool)
  }
}
