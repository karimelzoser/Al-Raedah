import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveOrderComponent } from './solve-order.component';

describe('SolveOrderComponent', () => {
  let component: SolveOrderComponent;
  let fixture: ComponentFixture<SolveOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolveOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
