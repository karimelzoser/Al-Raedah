import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebOrderListComponent } from './web-order-list.component';

describe('WebOrderListComponent', () => {
  let component: WebOrderListComponent;
  let fixture: ComponentFixture<WebOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
