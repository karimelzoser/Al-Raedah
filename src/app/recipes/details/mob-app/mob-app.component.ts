import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-mob-app',
  templateUrl: './mob-app.component.html',
  styleUrls: ['./mob-app.component.css'],
})
export class MobAppComponent implements OnInit {
  audioMob = 'تطبيقات الجوال.mp3';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datastrg: DataStorageService
  ) {}

  navOrd() {
    this.router.navigate(['../order/mobile-app-order'], {
      relativeTo: this.route,
    });
  }
  Cclick() {
    this.datastrg.setAudio(this.audioMob);
  }
  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
