import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetImpOrderComponent } from './net-imp-order.component';

describe('NetImpOrderComponent', () => {
  let component: NetImpOrderComponent;
  let fixture: ComponentFixture<NetImpOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetImpOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetImpOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
