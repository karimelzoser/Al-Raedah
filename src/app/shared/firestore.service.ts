import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Recipe } from '../recipes/recipes.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  itemsCollection: AngularFirestoreCollection<Recipe>;
  items: Observable<Recipe[]>;
  itemDoc: AngularFirestoreDocument<Recipe>;

  public x$: Observable<boolean>;
  private x: BehaviorSubject<boolean>;

  constructor(public fireservices: AngularFirestore) {
    this.x = new BehaviorSubject<boolean>(null);
    this.x$ = this.x.asObservable();
  }
  public recipes: Recipe;
  delete_one(id) {
    this.fireservices.doc('contactlist/' + id).delete();
  }
  delete_order(id) {
    this.fireservices.doc('orderList/' + id).delete();
  }

  get_allcontacts() {
    return this.fireservices
      .collection('contactlist', (ref) => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
      .pipe(take(2));
  }
  get_allOrders() {
    return this.fireservices
      .collection('orderList', (ref) => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
      .pipe(take(2));
  }
  get_allOrdersSolve() {
    return this.fireservices
      .collection('orderListSolve', (ref) => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
      .pipe(take(2));
  }
  get_allOrdersNetwork() {
    return this.fireservices
      .collection('orderListNetwork', (ref) => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
      .pipe(take(2));
  }
  get_allOrdersBussiness() {
    return this.fireservices
      .collection('orderListBussiness', (ref) =>
        ref.orderBy('timestamp', 'desc')
      )
      .snapshotChanges()
      .pipe(take(2));
  }
  get_allOrdersEvent() {
    return this.fireservices
      .collection('orderListEvent', (ref) => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
      .pipe(take(2));
  }
  get_allOrdersMobile() {
    return this.fireservices
      .collection('orderListMobile', (ref) => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
      .pipe(take(2));
  }
  get_allOrdersWeb() {
    return this.fireservices
      .collection('orderListWeb', (ref) => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
      .pipe(take(2));
  }

  get_allOrdersnetImp() {
    return this.fireservices
      .collection('orderListnetImp', (ref) => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
      .pipe(take(2));
  }
  get_allOrdersGraphic() {
    return this.fireservices
      .collection('orderListGraphic', (ref) => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
      .pipe(take(2));
  }

  get_allBlogs() {
    return this.fireservices
      .collection('blogs', (ref) => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
      .pipe(take(2));
  }

  get_blog(Id) {
    return this.fireservices
      .collection('blogs')
      .doc(Id)
      .snapshotChanges()
      .pipe(take(2));

    // tslint:disable-next-line: semicolon
    // this.fireservices
    //   .collection('patients', (ref) => ref.where('id', '==', patientId))
    //   .valueChanges();
  }

  create_newContact(contacts) {
    return this.fireservices.collection('contactlist').add(contacts);
  }
  create_newOrder(orders) {
    return this.fireservices.collection('orderList').add(orders);
  }
  create_newOrderSolve(orders) {
    return this.fireservices.collection('orderListSolve').add(orders);
  }
  create_newOrderNetwork(orders) {
    return this.fireservices.collection('orderListNetwork').add(orders);
  }
  create_newOrderBussiness(orders) {
    return this.fireservices.collection('orderListBussiness').add(orders);
  }
  create_newOrderEvent(orders) {
    return this.fireservices.collection('orderListEvent').add(orders);
  }
  create_newOrderMobile(orders) {
    return this.fireservices.collection('orderListMobile').add(orders);
  }
  create_newOrderWeb(orders) {
    return this.fireservices.collection('orderListWeb').add(orders);
  }
  create_newOrdernetImp(orders) {
    return this.fireservices.collection('orderListnetImp').add(orders);
  }
  create_newOrderGraphic(orders) {
    return this.fireservices.collection('orderListGraphic').add(orders);
  }

  // createProject(project, recipe) {
  //   return this.fireservices.collection(project).add(recipe);
  // }

  get_patient(proj, ids) {
    return this.fireservices
      .collection(proj)
      .doc(ids)
      .snapshotChanges()
      .pipe(take(2));
  }
  create_newblog(blog) {
    return this.fireservices.collection('blogs').add(blog);
  }

  // Residential Project Firestore

  delCol(path) {
    this.fireservices
      .collection(path)
      .get()
      .toPromise()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
  }

  // get_enoughtPatientfactory() {
  //   this.fireservices
  //     .collection<Recipe>('factory')
  //     .ref.where('date', '>', new Date())
  //     .get()
  //     .then((ref) => {
  //       let results = ref.docs.map((doc) => doc.data()['date']);
  //       console.log(results);
  //     });
  // }

  // get_allpatientfactory() {
  //   return this.fireservices
  //     .collection('factory', (ref) => ref.orderBy('timestamp', 'desc'))
  //     .snapshotChanges().pipe(take(2));;
  // }

  // get_allpatientbyDatefactory() {
  //   return this.fireservices
  //     .collection('factory', (ref) => ref.orderBy('date', 'desc'))
  //     .snapshotChanges().pipe(take(2));;
  // }

  update_blog(Id, newblog) {
    this.fireservices.doc('blogs/' + Id).update(newblog);
  }

  delete_blog(Id) {
    this.fireservices.doc('blogs/' + Id).delete();
  }
  delete_OrderSolve(Id) {
    this.fireservices.doc('orderListSolve/' + Id).delete();
  }

  delete_OrderNetwork(Id) {
    this.fireservices.doc('orderListNetwork/' + Id).delete();
  }
  delete_OrderBussiness(Id) {
    this.fireservices.doc('orderListBussiness/' + Id).delete();
  }
  delete_OrderEvent(Id) {
    this.fireservices.doc('orderListEvent/' + Id).delete();
  }
  delete_OrderMobile(Id) {
    this.fireservices.doc('orderListMobile/' + Id).delete();
  }
  delete_OrderWeb(Id) {
    this.fireservices.doc('orderListWeb/' + Id).delete();
  }
  delete_OrdernetImp(Id) {
    this.fireservices.doc('orderListnetImp/' + Id).delete();
  }
  delete_OrderGraphic(Id) {
    this.fireservices.doc('orderListGraphic/' + Id).delete();
  }
  delete_Order(Id) {
    this.fireservices.doc('orderList/' + Id).delete();
  }
}
