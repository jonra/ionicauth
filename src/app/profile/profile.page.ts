import { Component } from '@angular/core';


import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';


import { AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  profileDetails:any;

  constructor(public ft:AngularFirestore, public db: AngularFireDatabase) {
    const abc = this.ft.collection('profile').valueChanges().subscribe(data => { 
      this.profileDetails = data;
      console.log(data);
     });
  }

}
