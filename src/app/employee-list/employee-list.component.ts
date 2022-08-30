import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  employees:any=[];
  errorMsg="";
  ngOnInit(): void {
    //this.employees=this.employeeService.getEmployees();
    this.employeeService.getEmployees().subscribe(
      employeeData=>{
        this.employees=employeeData;
      },
      errorData=>{
       this.errorMsg=errorData;
      }
    )
  }

}
