import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveOrderListComponent } from './solve-order-list.component';

describe('SolveOrderListComponent', () => {
  let component: SolveOrderListComponent;
  let fixture: ComponentFixture<SolveOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolveOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
