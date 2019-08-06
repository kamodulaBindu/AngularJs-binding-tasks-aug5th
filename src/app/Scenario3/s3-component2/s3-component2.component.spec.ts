import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3Component2Component } from './s3-component2.component';

describe('S3Component2Component', () => {
  let component: S3Component2Component;
  let fixture: ComponentFixture<S3Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
