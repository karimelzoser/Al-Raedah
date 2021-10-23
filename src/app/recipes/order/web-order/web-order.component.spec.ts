import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebOrderComponent } from './web-order.component';

describe('WebOrderComponent', () => {
  let component: WebOrderComponent;
  let fixture: ComponentFixture<WebOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
