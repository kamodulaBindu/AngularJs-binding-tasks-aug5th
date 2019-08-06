import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S4Component2Component } from './s4-component2.component';

describe('S4Component2Component', () => {
  let component: S4Component2Component;
  let fixture: ComponentFixture<S4Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S4Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S4Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
