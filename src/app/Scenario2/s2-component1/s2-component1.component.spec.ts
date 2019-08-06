import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2Component1Component } from './s2-component1.component';

describe('S2Component1Component', () => {
  let component: S2Component1Component;
  let fixture: ComponentFixture<S2Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
