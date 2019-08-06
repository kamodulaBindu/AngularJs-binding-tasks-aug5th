import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-s5-component2',
  templateUrl: './s5-component2.component.html',
  styleUrls: ['./s5-component2.component.scss']
})
export class S5Component2Component implements OnInit {
  @Output() public childEvent1 = new EventEmitter();
  
 public message="";
  constructor() { }

  ngOnInit() {
  }
  fireEvent1(){
    this.childEvent1.emit("Fjfu");
  }
}
