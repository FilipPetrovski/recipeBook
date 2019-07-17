import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAaDuwvhc75cxcGYw4RVKogZgkp7nUYts0',
      authDomain: 'ng-recipe-book1234.firebaseapp.com'
    });
  }
}
