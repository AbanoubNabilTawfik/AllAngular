import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  @ViewChild(ChildComponent) child :ChildComponent;

  message:string="Hello child from parent";
  cars=["TIPO","KIA","LOGAN"];
  dataFromChild=""

  ngOnInit(): void {
    //this.child.printMsg();
  }

  ngAfterViewInit()
  {
    this.child.printMsg();
  }

}
