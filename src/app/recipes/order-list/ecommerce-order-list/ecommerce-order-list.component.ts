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
import { OrderEcommerce } from '../../orderEcommerce.model';

@Component({
  selector: 'app-ecommerce-order-list',
  templateUrl: './ecommerce-order-list.component.html',
  styleUrls: ['./ecommerce-order-list.component.css'],
})
export class EcommerceOrderListComponent implements OnInit {
  id;
  @Output() isClicked;
  orders: OrderEcommerce[];
  isAuthenticated = false;
  subscription: Subscription;
  date;
  private userSub: Subscription;
  toggling;
  filtering = null;
  dataia;
  lengthaya;
  //asd

  constructor(
    private router: Router,
    public dataStorage: DataStorageService,
    private authservice: AuthService,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) {}

  deleteOrder(id) {
    this.firestoreService.delete_OrderEcommerce(id);
  }
  ngOnInit() {
    this.dataStorage.getInfo().subscribe((value) => {
      this.toggling = value;
    });

    this.subscription = this.firestoreService
      .get_allOrdersEcommerce()
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
            dserv: e.payload.doc.data()['dserv'],
            delivery: e.payload.doc.data()['delivery'],
            webmob: e.payload.doc.data()['webmob'],
            banners: e.payload.doc.data()['banners'],
            dashbordsss: e.payload.doc.data()['dashbordsss'],
            employer: e.payload.doc.data()['employer'],
            ecom: e.payload.doc.data()['ecom'],
            stores: e.payload.doc.data()['stores'],
            commpackage: e.payload.doc.data()['commpackage'],
            managment: e.payload.doc.data()['managment'],

            timestamp: e.payload.doc.data()['timestamp'],
          };
        });
        // console.log(this.recipes);
        this.lengthaya = this.orders.length;
      });
  }
}
