import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserFormService } from '../user-form.service';
import { UserForm } from '../userForm';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor(private UserFormService:UserFormService) { }

  topics=["Angular","React","Vue"];
  userModel:UserForm= new UserForm('','','','',false);

  ngOnInit(): void {
  }

  saveUser()
  {
   this.UserFormService.SaveUser(this.userModel);
  }

}
