import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }
  textColor:string="green";
  hasError:boolean=false;

  styleMessages={
    color:"orange",
    fontStyle:"italic",
    backgroundColor:"blue"
  }

  ngOnInit(): void {
  }

}
