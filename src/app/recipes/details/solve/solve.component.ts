import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css'],
})
export class SolveComponent implements OnInit {
  audioSolve = 'الحلول البرمجية.mp3';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datastrg: DataStorageService
  ) {}

  navOrd() {
    this.router.navigate(['../order/solve-problems-order'], {
      relativeTo: this.route,
    });
  }
  Cclick() {
    this.datastrg.setAudio(this.audioSolve);
  }
  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
