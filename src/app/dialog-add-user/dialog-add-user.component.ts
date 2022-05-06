import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.class';
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
  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();

    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result) => {
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
