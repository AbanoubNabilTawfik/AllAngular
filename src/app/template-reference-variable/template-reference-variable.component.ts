import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.scss']
})
export class TemplateReferenceVariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  printMsg(value:any)
  {
    console.log("Hello from typescript")
    console.log("Input value is ",value)
  }

}
