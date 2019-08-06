import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-s3-component2',
  templateUrl: './s3-component2.component.html',
  styleUrls: ['./s3-component2.component.scss']
})
export class S3Component2Component implements OnInit {

  @Input() public parentdata;

  constructor() {
  }

  ngOnInit() {
  }

}
