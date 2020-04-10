import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAcctComponent } from './open-acct.component';

describe('OpenAcctComponent', () => {
  let component: OpenAcctComponent;
  let fixture: ComponentFixture<OpenAcctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenAcctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAcctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
