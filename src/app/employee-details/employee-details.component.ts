import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
import { User } from '../User';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  employees:any=[]
  errorMsg="";
  ngOnInit(): void {
    //this.employees=this.employeeService.getEmployees();
    this.employeeService.getEmployees().subscribe(
      data=>{
        this.employees=data;
      },
      error=>{
        this.errorMsg=error;
      }
    )
  }
  createPost()
  {
    let user = new User(1,"Test","Test Test");
    this.employeeService.createPost(user).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
