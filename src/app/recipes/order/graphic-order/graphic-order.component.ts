import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { FirestoreService } from 'src/app/shared/firestore.service';
import { OrderGraphic } from '../../orderGraphic.model';

@Component({
  selector: 'app-graphic-order',
  templateUrl: './graphic-order.component.html',
  styleUrls: ['./graphic-order.component.css'],
})
export class GraphicOrderComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  RTL: boolean = true;
  orders: OrderGraphic;
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
    this.firestoreService.create_newOrderGraphic(orders);
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
    let motion = '';
    let dserv = '';
    let message = '';
    let motionTime = '';
    let lang = '';
    let timestamp = Date();

    this.orderForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      companyName: new FormControl(companyName, Validators.required),
      field: new FormControl(field, Validators.required),
      address: new FormControl(address, Validators.required),
      service: new FormControl(service, Validators.required),
      phone: new FormControl(phone, Validators.required),
      email: new FormControl(email, Validators.required),
      message: new FormControl(message, Validators.required),
      motion: new FormControl(motion),
      motionTime: new FormControl(motionTime),
      dserv: new FormControl(dserv),
      lang: new FormControl(lang),
      timestamp: new FormControl(timestamp),
    });
  }
}
