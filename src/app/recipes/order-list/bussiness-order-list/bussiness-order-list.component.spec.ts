import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessOrderListComponent } from './bussiness-order-list.component';

describe('BussinessOrderListComponent', () => {
  let component: BussinessOrderListComponent;
  let fixture: ComponentFixture<BussinessOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
