import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicOrderListComponent } from './graphic-order-list.component';

describe('GraphicOrderListComponent', () => {
  let component: GraphicOrderListComponent;
  let fixture: ComponentFixture<GraphicOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
