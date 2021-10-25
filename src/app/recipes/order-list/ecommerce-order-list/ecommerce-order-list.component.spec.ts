import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceOrderListComponent } from './ecommerce-order-list.component';

describe('EcommerceOrderListComponent', () => {
  let component: EcommerceOrderListComponent;
  let fixture: ComponentFixture<EcommerceOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
