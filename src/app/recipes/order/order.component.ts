import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { FirestoreService } from 'src/app/shared/firestore.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  RTL: boolean = true;
  orders: Order;
  orderForm: FormGroup;
  showing: boolean;
  serviceName;
  services: any = [
    'التصميم والموشن جرافيك',
    'الحلول البرمجية',
    'إدارة الأعمال',
    'التجارة الإلكترونية',
    'تصميم مواقع الويب',
    'تطبيقات الموبايل',
    'أمن المعلومات والحماية التقنية',
    'تصميم وبناء الشبكات',
    'نجهيز قاعات التدريب',
    'دورات تدريبية',
    ,
  ];
  servicesAr: any = [
    'Design and Motion Graphics',
    'Software Solutions',
    'Bussiness Management',
    'E-Commerce',

    'Website Design',

    'Mobile Applications',

    'Information security and technical protection',
    'Network design and installation',
    'Workspace Preparing',
    'Course Sessions',
  ];
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
    this.serviceName.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  ngOnInit(): void {
    window.scroll(0, 0);
    this.datastrg.getInfo().subscribe((value) => {
      this.toggling = value;
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
    this.firestoreService.create_newOrder(orders);
    this.initOrderForm();
    this.formpop();
  }
  private initOrderForm() {
    let name = '';
    let companyName = '';
    let field = '';
    let address = '';
    let service = '';
    let otherService = null;
    let message = '';
    let phone = '';
    let email = '';
    let timestamp = Date();

    let timestmp = new Date();

    this.orderForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      companyName: new FormControl(companyName, Validators.required),
      field: new FormControl(field, Validators.required),
      address: new FormControl(address, Validators.required),
      service: new FormControl(service, Validators.required),
      otherService: new FormControl(otherService),
      message: new FormControl(message, Validators.required),
      phone: new FormControl(phone, Validators.required),
      email: new FormControl(email, Validators.required),
      timestamp: new FormControl(timestamp),
    });
  }
}
