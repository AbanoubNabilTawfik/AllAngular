import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { 

  }
  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"React JS"},
    {"id":3,"name":"C#"},
    {"id":4,"name":"Linq"},
    {"id":5,"name":"EntityFramework core"}
  ]
  selectedId:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=params.get("id");
    })
  }

  goToDepartmentDetails(deptId:any)
  {
    //go to department details page and send the id in the URL
    this.router.navigate(["/department",deptId]);
  }

}
