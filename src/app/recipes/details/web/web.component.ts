import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'],
})
export class WebComponent implements OnInit {
  audioWeb = 'تصميم مواقع الويب.mp3';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datastrg: DataStorageService
  ) {}

  navOrd() {
    this.router.navigate(['../order/web-development-order'], {
      relativeTo: this.route,
    });
  }
  Cclick() {
    this.datastrg.setAudio(this.audioWeb);
  }
  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
