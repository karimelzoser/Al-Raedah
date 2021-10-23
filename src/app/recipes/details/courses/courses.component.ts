import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  audioWeb = 'تصميم مواقع الويب.mp3';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datastrg: DataStorageService
  ) {}

  navOrd() {
    this.router.navigate(['../order'], {
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
