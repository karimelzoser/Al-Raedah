import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  RTL: boolean = true;
  showing: boolean;
  toggling;
  audioCO = 'كلمة رئيس مجلس الإدارة.mp3';
  audioTar = 'الأهداف.mp3';
  audioMe = 'الرسالة.mp3';
  audioVi = 'الرؤية.mp3';
  audio = new Audio();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private authService: AuthService,
    private render: Renderer2,
    private datastrg: DataStorageService
  ) {}
  COclick() {
    this.datastrg.setAudio(this.audioCO);
  }
  Tarclick() {
    this.datastrg.setAudio(this.audioTar);
  }
  Meclick() {
    this.datastrg.setAudio(this.audioMe);
  }
  Viclick() {
    this.datastrg.setAudio(this.audioVi);
  }
  ngOnInit(): void {
    this.datastrg.getInfo().subscribe((value) => {
      this.toggling = value;
    });

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
}
