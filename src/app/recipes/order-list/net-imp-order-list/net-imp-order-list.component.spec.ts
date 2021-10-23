import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetImpOrderListComponent } from './net-imp-order-list.component';

describe('NetImpOrderListComponent', () => {
  let component: NetImpOrderListComponent;
  let fixture: ComponentFixture<NetImpOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetImpOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetImpOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
