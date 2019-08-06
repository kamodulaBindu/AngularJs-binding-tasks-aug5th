import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S5Component1Component } from './s5-component1.component';

describe('S5Component1Component', () => {
  let component: S5Component1Component;
  let fixture: ComponentFixture<S5Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
