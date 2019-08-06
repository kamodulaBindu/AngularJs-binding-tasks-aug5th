import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-s5-component3',
  templateUrl: './s5-component3.component.html',
  styleUrls: ['./s5-component3.component.scss']
})
export class S5Component3Component implements OnInit {
  
  @Output() public childEvent = new EventEmitter();

  public name="";

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit(this.name);
  }
}
