import { Component, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Directionality } from '@angular/cdk/bidi';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
})
export class HeadingComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  toggling;
  RTL: boolean = true;
  constructor(
    private authService: AuthService,
    public translate: TranslateService,
    private dstorage: DataStorageService,
    private render: Renderer2,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navhome() {
    this.router.navigate(['/home']);
  }
  navOrder(navs) {
    this.router.navigate([`/order-list/${navs}`], {
      relativeTo: this.route,
    });
  }
  changeDir(dir) {
    this.render.setAttribute(document.body, 'dir', dir);
    localStorage.setItem('currentDir', dir);
  }
  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }

  changeToggling(toggle) {
    this.dstorage.setInfo(toggle);
    localStorage.setItem('toggling', toggle);
  }

  navHome() {
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    this.dstorage.getInfo().subscribe((value) => {
      this.toggling = value;
    });
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
}
