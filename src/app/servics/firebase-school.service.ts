import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseSchoolService {
  school: FirebaseObjectObservable<School>
  schoolList: FirebaseListObservable<any[]>

  classRoom: FirebaseObjectObservable<ClassRoom>
  classRoomList: FirebaseListObservable<ClassRoom[]>
  classRoomItemList: FirebaseListObservable<ClassItem[]>
  

  constructor(private db: AngularFireDatabase) { 
    this.schoolList =  db.list(environment.FB_NODE_SCHOOL.name) as FirebaseListObservable<School[]>;
  }

 getSchools(){
   console.log(' getSchools()')
    return this.schoolList;
  }

  getSchoolDetails(key){
    this.school = this.db.object(environment.FB_NODE_SCHOOL.name + '/' + key) as FirebaseObjectObservable<School>
    return this.school
  }

   getClassRooms(schoolKey){
      let fbClassRoom: string = environment.FB_NODE_SCHOOL.name + "/" + schoolKey + "/" + environment.FB_NODE_CLASSROOM.name
      this.classRoomList = this.db.list(fbClassRoom, {
        query: {
          orderByChild: environment.FB_NODE_CLASSROOM.FB_ITEM_CLASSRM.ITEM_SortKey
        }
      }) as FirebaseListObservable<ClassRoom[]>

      return this.classRoomList;
    }

  getClassRoomItems(schoolKey, classKey){
    let fbSchoolPath:String = environment.FB_NODE_SCHOOL.name + "/" + schoolKey + "/"
    let fbClassRoomPath: String =  fbSchoolPath + environment.FB_NODE_CLASSROOM.name + "/" + classKey + "/"
    let fbClassRoomItemsPath: string = fbClassRoomPath + environment.FB_NODE_CLASSROOM.FB_ITEM_CLASSRM.ITEM_ClassItemList

    this.classRoomItemList = this.db.list(fbClassRoomItemsPath, {
      query: {
        orderByChild: environment.FB_NODE_CLASSROOM.FB_ITEM_CLASSRM.ITEM_SortKey
      }
    }) as FirebaseListObservable<ClassItem[]>;
    return this.classRoomItemList
  }

}

interface ClassItem {
  $key?: string;
  itemName?: string;
  itemDesc?: string;
  itemQty?: string;
  itemImageUrl?: string;
  itemNotes?: string;
  itemType?: string;
  itemRetail01?: string;
  itemRetail01Name?: string;
  itemRetail02?: string;
  itemRetail02Name?: string;
  itemRetail03?: string;
  itemRetail03Name?: string;
      
}

interface ClassRoom {
  $key?: string;
  schoolKey: string,
  name?: string;
  namelong?: string;
  nameShort?: string;
  classNotes?: string;
  
}

interface School {
  $key?: string;
  name?: string;
  image?: string;
  address?: string;
  phone?: string;
  webSite?: string;
  logo?: string;
  note01?: string;
  note02?: string;
  classRmCount: number;     
}
