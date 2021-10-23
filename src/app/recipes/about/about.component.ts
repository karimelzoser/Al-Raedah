import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  audio = new Audio();
  audioEcomm = 'التجارة الإلكترونية.mp3';
  audioBuss = 'إدارة الأعمال.mp3';
  audioGraph = 'التصاميم والموشن جرافيك.mp3';
  audioSolve = 'الحلول البرمجية.mp3';
  audioSec = 'أمن المعلومات والحماية التقنية.mp3';
  audioNet = 'بناء وتصميم الشبكات.mp3';
  audioWeb = 'تصميم مواقع الويب.mp3';
  audioMob = 'تطبيقات الجوال.mp3';
  RTL: boolean = true;
  showing: boolean;
  toggling;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private authService: AuthService,
    private render: Renderer2,
    private datastrg: DataStorageService
  ) {}
  Eclick() {
    this.datastrg.setAudio(this.audioEcomm);
  }
  Bclick() {
    this.datastrg.setAudio(this.audioBuss);
  }
  Gclick() {
    this.datastrg.setAudio(this.audioGraph);
  }
  Sclick() {
    this.datastrg.setAudio(this.audioSolve);
  }
  Secclick() {
    this.datastrg.setAudio(this.audioSec);
  }
  Nclick() {
    this.datastrg.setAudio(this.audioNet);
  }

  Mclick() {
    this.datastrg.setAudio(this.audioMob);
  }

  Wclick() {
    this.datastrg.setAudio(this.audioWeb);
  }
  nav(more) {
    this.router.navigate([`/${more}`]);
  }
  formpopS() {
    this.router.navigate(['/order/solve-problems-order']);
  }
  formpopB() {
    this.router.navigate(['/order/bussiness-order']);
  }
  formpopE() {
    this.router.navigate(['/order/ecommerce-order']);
  }
  formpopN() {
    this.router.navigate(['/order/network-order']);
  }
  formpopG() {
    this.router.navigate(['/order/graphic-design-order']);
  }
  formpopSec() {
    this.router.navigate(['/order/security-order']);
  }
  formpopM() {
    this.router.navigate(['/order/mobile-app-order']);
  }
  formpopW() {
    this.router.navigate(['/order/wev-development-order']);
  }
  formpopEV() {
    this.router.navigate(['/order/event-order']);
  }
  formpopC() {
    this.router.navigate(['/order/course-order']);
  }
  ngOnInit(): void {
    this.datastrg.getInfo().subscribe((value) => {
      this.toggling = value;
    });
    // $(function () {
    //   $('.ones').hover(
    //     function () {
    //       $('.toolone').css('transform', 'scale(1)');
    //     },
    //     function () {
    //       // on mouseout, reset the background colour
    //       $('.toolone').css('transform', 'scale(0)');
    //     }
    //   );
    // });

    // $(function () {
    //   $('.twos').hover(
    //     function () {
    //       $('.tooltwo').css('transform', 'scale(1)');
    //     },
    //     function () {
    //       // on mouseout, reset the background colour
    //       $('.tooltwo').css('transform', 'scale(0)');
    //     }
    //   );
    // });

    // $(function () {
    //   $('.threes').hover(
    //     function () {
    //       $('.toolthree').css('transform', 'scale(1)');
    //     },
    //     function () {
    //       // on mouseout, reset the background colour
    //       $('.toolthree').css('transform', 'scale(0)');
    //     }
    //   );
    // });
    // $(function () {
    //   $('.fours').hover(
    //     function () {
    //       $('.toolfour').css('transform', 'scale(1)');
    //     },
    //     function () {
    //       // on mouseout, reset the background colour
    //       $('.toolfour').css('transform', 'scale(0)');
    //     }
    //   );
    // });
    // $(function () {
    //   $('.fives').hover(
    //     function () {
    //       $('.toolfive').css('transform', 'scale(1)');
    //     },
    //     function () {
    //       // on mouseout, reset the background colour
    //       $('.toolfive').css('transform', 'scale(0)');
    //     }
    //   );
    // });
    // $(function () {
    //   $('.sixs').hover(
    //     function () {
    //       $('.toolsix').css('transform', 'scale(1)');
    //     },
    //     function () {
    //       // on mouseout, reset the background colour
    //       $('.toolsix').css('transform', 'scale(0)');
    //     }
    //   );
    // });
    // $(function () {
    //   $('.sevens').hover(
    //     function () {
    //       $('.toolseven').css('transform', 'scale(1)');
    //     },
    //     function () {
    //       // on mouseout, reset the background colour
    //       $('.toolseven').css('transform', 'scale(0)');
    //     }
    //   );
    // });

    // $(function () {
    //   $('.eights').hover(
    //     function () {
    //       $('.tooleight').css('transform', 'scale(1)');
    //     },
    //     function () {
    //       // on mouseout, reset the background colour
    //       $('.tooleight').css('transform', 'scale(0)');
    //     }
    //   );
    // });
    // $(function () {
    //   $('.nines').hover(
    //     function () {
    //       $('.toolnine').css('transform', 'scale(1)');
    //     },
    //     function () {
    //       // on mouseout, reset the background colour
    //       $('.toolnine').css('transform', 'scale(0)');
    //     }
    //   );
    // });
    // $(function () {
    //   $('.tens').hover(
    //     function () {
    //       $('.toolten').css('transform', 'scale(1)');
    //     },
    //     function () {
    //       // on mouseout, reset the background colour
    //       $('.toolten').css('transform', 'scale(0)');
    //     }
    //   );
    // });

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
}
