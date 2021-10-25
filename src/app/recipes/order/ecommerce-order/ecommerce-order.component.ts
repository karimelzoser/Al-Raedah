import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { FirestoreService } from 'src/app/shared/firestore.service';
import { OrderEcommerce } from '../../orderEcommerce.model';

@Component({
  selector: 'app-ecommerce-order',
  templateUrl: './ecommerce-order.component.html',
  styleUrls: ['./ecommerce-order.component.css'],
})
export class EcommerceOrderComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  RTL: boolean = true;
  orders: OrderEcommerce;
  orderForm: FormGroup;
  showing: boolean;
  graph;
  otherss;
  serviceName;
  // services: any = [
  //   'مبيعات + نظام الفاتورة الالكترونية',
  //   'نظام محاسبي متكامل ERP',
  //   'المتاجر الالكترونية',
  //   'نظام محاسبي وادارة المخزن',
  //   'ادارة قاعات الافراح',
  // ];
  // servicesAr: any = [
  //   'Sales + Electronic Invoice System',
  //   'An integrated accounting system ERP',
  //   'electronic stores',
  //   'Accounting system and warehouse management',
  //   'Wedding hall management',
  // ];
  toggling;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private authService: AuthService,
    private render: Renderer2,
    private datastrg: DataStorageService,
    private firestoreService: FirestoreService
  ) {}
  changeCity(e) {
    this.serviceName = e.target.value;
    this.graph = e.target.value;
  }
  checked() {
    if ($('#lasted').is(':checked')) {
      $('#cheko').removeAttr('disabled');
      $('#cheko').focus();
    } else if ($('#lasted').is(':checked')) {
      $('#cheko').attr('disabled', 'disabled');
    }
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.datastrg.getInfo().subscribe((value) => {
      this.toggling = value;
    });
    this.datastrg.getGraph().subscribe((value) => {
      this.graph = value;
    });
    this.initOrderForm();

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  formpop() {
    var poping = document.getElementById('popup-reg');
    poping.setAttribute('class', 'active fade-out popup popup-reg');
  }
  formClear() {
    var poping = document.getElementById('popup-reg');
    poping.setAttribute('class', 'popup popup-reg');
  }
  onSubmitOrder() {
    let orders = this.orderForm.value;
    console.log(orders);
    this.firestoreService.create_newOrderEcommerce(orders);
    this.initOrderForm();
    this.formpop();
  }
  private initOrderForm() {
    let name = '';
    let companyName = '';
    let field = '';
    let address = '';
    let service = '';
    let phone = '';
    let email = '';
    let dserv = '';
    let delivery = '';
    let webmob = '';
    let banners = '';
    let ecom = '';
    let dashbordsss = '';
    let management = '';
    let employer = '';
    let commpackage = '';
    let stores = '';
    let timestamp = Date();

    this.orderForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      companyName: new FormControl(companyName, Validators.required),
      field: new FormControl(field, Validators.required),
      address: new FormControl(address, Validators.required),
      service: new FormControl(service, Validators.required),
      phone: new FormControl(phone, Validators.required),
      email: new FormControl(email, Validators.required),
      dserv: new FormControl(dserv),
      delivery: new FormControl(delivery),
      webmob: new FormControl(webmob),
      banners: new FormControl(banners),
      dashbordsss: new FormControl(dashbordsss),
      management: new FormControl(management),
      employer: new FormControl(employer),
      ecom: new FormControl(ecom),
      commpackage: new FormControl(commpackage),
      stores: new FormControl(stores),
      timestamp: new FormControl(timestamp),
    });
  }
}
