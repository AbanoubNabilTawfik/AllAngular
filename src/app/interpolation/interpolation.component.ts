import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  constructor() { }
  fullName:string="Hassan Shawki";
  url:string=window.location.href;

  ngOnInit(): void {
  }

}
