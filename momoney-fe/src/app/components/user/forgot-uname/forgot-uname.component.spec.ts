import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotUnameComponent } from './forgot-uname.component';

describe('ForgotUnameComponent', () => {
  let component: ForgotUnameComponent;
  let fixture: ComponentFixture<ForgotUnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotUnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotUnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
