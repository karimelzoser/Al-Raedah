import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { FirestoreService } from 'src/app/shared/firestore.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  RTL: boolean = true;
  contacts: Contact;
  contactForm: FormGroup;
  showing: boolean;
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
  ngOnInit(): void {
    this.datastrg.getInfo().subscribe((value) => {
      this.toggling = value;
    });
    this.initContactForm();

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
  onSubmitContact() {
    let contacts = this.contactForm.value;
    console.log(contacts);
    this.firestoreService.create_newContact(contacts);
    this.initContactForm();
    this.formpop();
  }
  private initContactForm() {
    let name = '';
    let email = '';
    let subject = '';
    let message = '';

    let timestmp = new Date();

    this.contactForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      email: new FormControl(email, Validators.required),
      subject: new FormControl(subject, Validators.required),
      message: new FormControl(message, Validators.required),

      timestamp: new FormControl(timestmp),
    });
  }
}
