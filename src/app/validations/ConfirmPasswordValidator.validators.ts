import { AbstractControl } from "@angular/forms";

export function ConfirmPasswordValidator(controls:AbstractControl)
{
  var password=controls.get('password');
  var confirmPassword= controls.get('confirmPassword');
 if(password?.pristine || confirmPassword?.pristine)
 {
    return null;
 }
 else
 {
    return password && confirmPassword && password.value!=confirmPassword.value 
    ? {'misMatch':true}
    :null;
 }
 
}