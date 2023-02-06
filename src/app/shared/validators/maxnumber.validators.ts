import { AbstractControl, ValidationErrors } from "@angular/forms";

export class MaxNumberValidator{
    static maxNumber(control : AbstractControl): ValidationErrors | null{
        if(control.value > 100){
            return { maxNumber : true }
        }else{
            return null
        }
    }
}