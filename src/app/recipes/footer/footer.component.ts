import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
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
  ngOnInit(): void {
    this.datastrg.getInfo().subscribe((value) => {
      this.toggling = value;
    });

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
}
