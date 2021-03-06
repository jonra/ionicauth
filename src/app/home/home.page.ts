import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor( private rout: Router, private aut: AngularFireAuth, private router: Router) {
    this.aut.authState
    .subscribe(
      user => {
        if (user) {
          this.rout.navigateByUrl('home');
        } else {
          this.rout.navigateByUrl('/login');
        }
      },
      () => {
        this.rout.navigateByUrl('/login');
      }
    );
  }

  async signOut() {
  
    const res = await this.aut.auth.signOut();
    console.log(res);
    this.router.navigateByUrl('/login');
  }

  async profileInfo() {

  //  const res = await this.aut.auth.signOut();
//    console.log(res);

    this.router.navigateByUrl('/profile');
  }

}
