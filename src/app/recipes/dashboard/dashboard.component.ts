import { Component, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { filter } from 'rxjs/operators';

import { Observable, Subscriber, Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/shared/firestore.service';
import * as $ from 'jquery';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/storage';

import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { Contact } from '../contact.model';
import { Recipe } from '../recipes.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  id;
  @Output() isClicked;
  contacts: Contact[];
  isAuthenticated = false;
  subscription: Subscription;
  date;
  private userSub: Subscription;

  filtering = null;
  dataia;
  lengthaya;
  toggling;

  constructor(
    private router: Router,
    public dataStorage: DataStorageService,
    private authservice: AuthService,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) {}

  deleteContact(id) {
    this.firestoreService.delete_one(id);
  }
  ngOnInit() {
    this.dataStorage.getInfo().subscribe((value) => {
      this.toggling = value;
    });

    this.subscription = this.firestoreService
      .get_allcontacts()
      .subscribe((data) => {
        this.contacts = data.map((e) => {
          return {
            id: e.payload.doc.id,
            name: e.payload.doc.data()['name'],
            email: e.payload.doc.data()['email'],
            subject: e.payload.doc.data()['subject'],
            message: e.payload.doc.data()['message'],

            timestamp: e.payload.doc.data()['timestamp'],
          };
        });
        // console.log(this.recipes);
        this.lengthaya = this.contacts.length;
      });
  }
}
