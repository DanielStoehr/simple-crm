import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('user', this.user);

    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result) => {
        console.log('Added User: ', result);
      });
  }
}
