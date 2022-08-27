import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proprety-binding',
  templateUrl: './proprety-binding.component.html',
  styleUrls: ['./proprety-binding.component.scss']
})
export class PropretyBindingComponent implements OnInit {

  constructor() { }
  textId:string="myId5";
  isDisabled:boolean=false;

  ngOnInit(): void {
  }

}
