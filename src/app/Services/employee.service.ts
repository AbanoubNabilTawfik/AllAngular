import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employees=[
    {"id":1 , "name":"Abanoub Nabil"},
    {"id":2 ,  "name":"Hassan Shawki"},
    {"id":3 , "name":"Ahmed Mohamed"},
    {"id":4 ,"name":"Mostafa Galal"}
  ]
  getEmployees()
  {
   return this.employees;
  }
}
