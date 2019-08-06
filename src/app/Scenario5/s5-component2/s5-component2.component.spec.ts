import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S5Component2Component } from './s5-component2.component';

describe('S5Component2Component', () => {
  let component: S5Component2Component;
  let fixture: ComponentFixture<S5Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
