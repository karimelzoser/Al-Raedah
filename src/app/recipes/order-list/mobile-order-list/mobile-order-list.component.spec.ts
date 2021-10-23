import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOrderListComponent } from './mobile-order-list.component';

describe('MobileOrderListComponent', () => {
  let component: MobileOrderListComponent;
  let fixture: ComponentFixture<MobileOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
