import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessOrderComponent } from './bussiness-order.component';

describe('BussinessOrderComponent', () => {
  let component: BussinessOrderComponent;
  let fixture: ComponentFixture<BussinessOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
