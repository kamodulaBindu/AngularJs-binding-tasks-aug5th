import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-s4-component2',
  templateUrl: './s4-component2.component.html',
  styleUrls: ['./s4-component2.component.scss']
})
export class S4Component2Component implements OnInit {

@Output() public childEvent = new EventEmitter();
  public name="";

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('');
  }
}
