import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesOrderComponent } from './courses-order.component';

describe('CoursesOrderComponent', () => {
  let component: CoursesOrderComponent;
  let fixture: ComponentFixture<CoursesOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
