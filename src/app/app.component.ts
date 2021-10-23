import { Directionality } from '@angular/cdk/bidi';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';
import { DataStorageService } from './shared/data-storage.service';
// import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  onActivate(event) {
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }
  currentLang: string;
  currentDir: string;
  toggling;
  constructor(
    private authService: AuthService,
    private loggingService: LoggingService,
    private datastorageservice: DataStorageService,
    public translate: TranslateService,
    private render: Renderer2
  ) {
    this.currentLang = localStorage.getItem('currentLang') || 'ar';
    this.currentDir = localStorage.getItem('currentDir') || 'rtl';
    this.toggling = localStorage.getItem('toggling') || 'false';
    this.translate.use(this.currentLang);
    this.datastorageservice.setInfo(this.toggling);
  }

  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }

  ngOnInit() {
    // this.translate.use(this.currentLang);
  }
}
