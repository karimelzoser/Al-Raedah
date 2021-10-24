import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesOrderListComponent } from './courses-order-list.component';

describe('CoursesOrderListComponent', () => {
  let component: CoursesOrderListComponent;
  let fixture: ComponentFixture<CoursesOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
