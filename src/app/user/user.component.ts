import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'id' })
      .subscribe((changes: any) => {
        console.log('Received changes from DB', changes);
        this.users = changes;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {
      // width: '250px',
      // data: {name: this.name, animal: this.animal},
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed');
    //   console.log(result);
    //   // this.animal = result;
    // });
  }
}
