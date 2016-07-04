/// <reference path="../../../node_modules/angularfire2/firebase3.d.ts" />
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  items: Observable<any[]>;
  constructor(private navController: NavController, af: AngularFire) {
    this.items = af.database.list('/table-elements');
    console.log(af)
  }
}
