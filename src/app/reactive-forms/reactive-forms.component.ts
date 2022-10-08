import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../validations/ConfirmPasswordValidator.validators';
import { ForbiddenNameValidator } from '../validations/ForbiddenNameValidator.validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  // registerationForm=new FormGroup({
  //   userName :new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address:new FormGroup({
  //      state: new FormControl(''),
  //      city:new FormControl(''),
  //      postalCode:new FormControl('')
  //   })
  // })

  registerationForm=this.fb.group({
    userName :['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/suberadmin/),ForbiddenNameValidator(/admin/)]],
    password: [''],
    confirmPassword:[''],
    address:this.fb.group({
       state: [''],
       city:[''],
       postalCode:['']
    })
  },{validator:[ConfirmPasswordValidator]})

  get userName(){
    return this.registerationForm.get('userName');
  }
  ngOnInit(): void {
  }

  fillData()
  {
    // this.registerationForm.setValue({
    //   userName:'Hassan',
    //   password:'123',
    //   confirmPassword:'123',
    //   address:{
    //     state:'Egypt',
    //     city:'Assiut',
    //     postalCode:'71111'
    //   }
    // })

    this.registerationForm.patchValue({
      userName:'Hassan',
      address:{
        state:'Egypt',
        city:'Assiut',
        postalCode:'71111'
      }
    })
  }

}
