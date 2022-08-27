import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() parentData="";

  @Input('parentCars') cars :any=[];

  @Output() childEvent = new EventEmitter();

  ngOnInit(): void {
  }

  sendData()
  {
   this.childEvent.emit("Hello parent from child")
  }

  printMsg()
  {
    console.log("Hello from child")
  }

}
