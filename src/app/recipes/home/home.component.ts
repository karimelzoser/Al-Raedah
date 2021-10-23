import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  RTL: boolean = true;
  showing: boolean;
  toggling;
  audioMain = 'IVR شركة الرائدة الكبرى.wav';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private authService: AuthService,
    private render: Renderer2,
    private datastrg: DataStorageService
  ) {}
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  lang(val) {
    this.datastrg.setInfo(val);
  }
  navBlogs() {
    this.router.navigate(['/blogs'], { relativeTo: this.route });
  }

  onLogout() {
    this.authService.logout();
  }
  navContact() {
    this.router.navigate(['/contactlistofeveryoneloggedtheform/dashboard'], {
      relativeTo: this.route,
    });
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
    this.datastrg.setInfo(toggle);
    localStorage.setItem('toggling', toggle);
  }

  // @HostListener('scroll', ['$event'])
  // onElementScroll($event) {}

  slideConfig = {
    centerMode: true,
    centerPadding: '60px',
    autoplay: 'true',
    autoplaySpeed: 500,
    slidesToShow: 5,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 3,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 1,
  //     },
  //   },
  // ],

  ngOnInit(): void {
    AOS.init();

    this.datastrg.getInfo().subscribe((value) => {
      this.toggling = value;
    });
    this.datastrg.setAudio(this.audioMain);
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
}
