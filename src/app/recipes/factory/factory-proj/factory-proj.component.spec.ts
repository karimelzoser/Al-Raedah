import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryProjComponent } from './factory-proj.component';

describe('FactoryProjComponent', () => {
  let component: FactoryProjComponent;
  let fixture: ComponentFixture<FactoryProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryProjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});







