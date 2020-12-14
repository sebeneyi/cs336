import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import firebase from 'firebase/app';
// import { Observable, BehaviorSubject } from 'rxjs';
export interface firestoreRec { color?: string, message: string, timestamp: firebase.firestore.Timestamp; };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chat App';
  public name: string;
  public color: string;
  public message: string;
  public array: firestoreRec[];

  constructor(private db: AngularFirestore) {
    this.db.collection<firestoreRec>('/users', ref => ref.orderBy('timestamp')).valueChanges().subscribe(res => {
      this.array = res;
    });
    this.name = localStorage.getItem('name');
    this.color = localStorage.getItem('color');
  }

  add() {
    this.db.collection("users").add({
      message: this.message, color: this.color, name: this.name, timestamp: new Date(),
    })
    this.message = undefined;
  }

  //to put name into local storage
  addName() {
    localStorage.setItem('name', this.name)
  }

  //to put color into local storage
  addColor() {
    localStorage.setItem('color', this.color)
  }

}
