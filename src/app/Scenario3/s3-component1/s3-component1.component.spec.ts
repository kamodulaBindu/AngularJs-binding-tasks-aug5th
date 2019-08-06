import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3Component1Component } from './s3-component1.component';

describe('S3Component1Component', () => {
  let component: S3Component1Component;
  let fixture: ComponentFixture<S3Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
