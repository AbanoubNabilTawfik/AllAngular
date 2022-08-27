import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directives',
  templateUrl: './structure-directives.component.html',
  styleUrls: ['./structure-directives.component.scss']
})
export class StructureDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayText:boolean=false;
  isLoggedIn:boolean=true;
  color:string="dfgh";

  cars=["KIA","TIPO","LOGAN","HONDA"];

  persons=[
    {"id":1 , "name":"Hassan Shawki"},
    {"id":2 , "name":"Abanoub Nabil"},
    {"id":3 , "name":"Ahmed Mamdoh"},
    {"id":4 , "name":"Sara Mohamed"},
    {"id":5 , "name":"Ibrahim Saad"},

  ]

}
