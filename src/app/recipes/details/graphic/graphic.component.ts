import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css'],
})
export class GraphicComponent implements OnInit {
  audioGraph = 'التصاميم والموشن جرافيك.mp3';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datastrg: DataStorageService
  ) {}

  navOrd() {
    this.router.navigate(['../order/graphic-design-order'], {
      relativeTo: this.route,
    });
  }
  Cclick() {
    this.datastrg.setAudio(this.audioGraph);
  }
  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
