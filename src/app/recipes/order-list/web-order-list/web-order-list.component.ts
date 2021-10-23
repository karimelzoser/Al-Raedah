import { Component, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
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
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';
import { OrderWeb } from '../../orderWeb.model';

@Component({
  selector: 'app-web-order-list',
  templateUrl: './web-order-list.component.html',
  styleUrls: ['./web-order-list.component.css'],
})
export class WebOrderListComponent implements OnInit {
  id;
  @Output() isClicked;
  orders: OrderWeb[];
  isAuthenticated = false;
  subscription: Subscription;
  date;
  private userSub: Subscription;
  toggling;
  filtering = null;
  dataia;
  lengthaya;

  constructor(
    private router: Router,
    public dataStorage: DataStorageService,
    private authservice: AuthService,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) {}

  deleteOrder(id) {
    this.firestoreService.delete_OrderWeb(id);
  }
  ngOnInit() {
    this.dataStorage.getInfo().subscribe((value) => {
      this.toggling = value;
    });

    this.subscription = this.firestoreService
      .get_allOrdersWeb()
      .subscribe((data) => {
        this.orders = data.map((e) => {
          return {
            id: e.payload.doc.id,
            name: e.payload.doc.data()['name'],
            companyName: e.payload.doc.data()['companyName'],
            field: e.payload.doc.data()['field'],
            address: e.payload.doc.data()['address'],
            service: e.payload.doc.data()['service'],
            phone: e.payload.doc.data()['phone'],
            email: e.payload.doc.data()['email'],
            screens: e.payload.doc.data()['screens'],
            message: e.payload.doc.data()['message'],

            timestamp: e.payload.doc.data()['timestamp'],
          };
        });
        // console.log(this.recipes);
        this.lengthaya = this.orders.length;
      });
  }
}
