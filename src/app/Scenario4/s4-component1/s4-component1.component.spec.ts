import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S4Component1Component } from './s4-component1.component';

describe('S4Component1Component', () => {
  let component: S4Component1Component;
  let fixture: ComponentFixture<S4Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S4Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S4Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
