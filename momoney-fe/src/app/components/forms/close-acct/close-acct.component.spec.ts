import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseAcctComponent } from './close-acct.component';

describe('CloseAcctComponent', () => {
  let component: CloseAcctComponent;
  let fixture: ComponentFixture<CloseAcctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseAcctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseAcctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
