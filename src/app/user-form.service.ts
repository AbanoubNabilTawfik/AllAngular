import { Injectable } from '@angular/core';
import { UserForm } from './userForm';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  constructor() { }

  SaveUser(user:UserForm)
  {
    //call to the Api
    console.log(user)
  }
}
