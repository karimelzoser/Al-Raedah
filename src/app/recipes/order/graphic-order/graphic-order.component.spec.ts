import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicOrderComponent } from './graphic-order.component';

describe('GraphicOrderComponent', () => {
  let component: GraphicOrderComponent;
  let fixture: ComponentFixture<GraphicOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
