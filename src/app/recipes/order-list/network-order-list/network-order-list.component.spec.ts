import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkOrderListComponent } from './network-order-list.component';

describe('NetworkOrderListComponent', () => {
  let component: NetworkOrderListComponent;
  let fixture: ComponentFixture<NetworkOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
