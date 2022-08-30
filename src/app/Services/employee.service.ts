import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from '../IEmployee';
import { User } from '../User';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  url:string='/assets/Data/employes.json'
  postUrl:string="https://jsonplaceholder.typicode.com/pots";
  getEmployees():Observable<IEmployee[]>
  {
   //return this.employees;
   return this.http.get<IEmployee[]>(this.url).pipe(catchError((err)=>{
    return throwError(()=>err.message || "Internal server error")
   }))
  }

  createPost(user:User)
  {
   return this.http.post(this.postUrl,user).pipe(catchError((err)=>{
    return throwError(()=>err.message || "Internal server error")
   }));
  }


}
