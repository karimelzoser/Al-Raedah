import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { FirestoreService } from 'src/app/shared/firestore.service';
import { OrderWeb } from '../../orderWeb.model';

@Component({
  selector: 'app-web-order',
  templateUrl: './web-order.component.html',
  styleUrls: ['./web-order.component.css'],
})
export class WebOrderComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  RTL: boolean = true;
  orders: OrderWeb;
  orderForm: FormGroup;
  showing: boolean;
  serviceName;
  services: any = ['تصميم مواقع الويب'];
  servicesAr: any = ['Website development'];
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
    this.firestoreService.create_newOrderWeb(orders);
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
    let screens = '';
    let message = '';
    let timestamp = Date();

    this.orderForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      companyName: new FormControl(companyName, Validators.required),
      field: new FormControl(field, Validators.required),
      address: new FormControl(address, Validators.required),
      service: new FormControl(service, Validators.required),
      phone: new FormControl(phone, Validators.required),
      email: new FormControl(email, Validators.required),
      screens: new FormControl(screens, Validators.required),
      message: new FormControl(message),
      timestamp: new FormControl(timestamp),
    });
  }
}
