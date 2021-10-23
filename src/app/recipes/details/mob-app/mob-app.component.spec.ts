import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobAppComponent } from './mob-app.component';

describe('MobAppComponent', () => {
  let component: MobAppComponent;
  let fixture: ComponentFixture<MobAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
