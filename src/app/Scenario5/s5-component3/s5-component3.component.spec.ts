import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S5Component3Component } from './s5-component3.component';

describe('S5Component3Component', () => {
  let component: S5Component3Component;
  let fixture: ComponentFixture<S5Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
