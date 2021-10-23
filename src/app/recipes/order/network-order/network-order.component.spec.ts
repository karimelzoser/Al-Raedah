import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkOrderComponent } from './network-order.component';

describe('NetworkOrderComponent', () => {
  let component: NetworkOrderComponent;
  let fixture: ComponentFixture<NetworkOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
