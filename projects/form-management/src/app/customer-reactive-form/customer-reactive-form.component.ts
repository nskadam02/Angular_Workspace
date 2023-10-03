import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-reactive-form',
  templateUrl: './customer-reactive-form.component.html',
  styleUrls: ['./customer-reactive-form.component.css']
})
export class CustomerReactiveFormComponent {

  customerForm!:FormGroup
  constructor(private formBuilder:FormBuilder)
  {

  }
  ngOnInit()
  {
    // this.customerForm=new FormGroup({
    //   firstName : new FormControl(''),
    //   lastName:new FormControl('')
    // })
    // this.customerForm=this.formBuilder.group(
    //   {
    //     firstName:'',
    //     lastName:''
    //   }
    // )
    this.customerForm=this.formBuilder.group(
        {
          firstName:['Neha',[Validators.required,Validators.minLength(3)]],
          lastName:['Kadam',[Validators.required]],
          minAndMax:this.formBuilder.group({
            min:['',[Validators.required]],
            max:['',[Validators.required]]
          },{Validators:this.minAndMaxValidator}),
          email:['',[Validators.required,Validators.email]],
          mobile:[''],
          notiType:['']
        }
       )
    // this.customerForm.statusChanges
    // .subscribe(status=>console.log(status))
    // this.customerForm.valueChanges
    // .subscribe(value=>{
    //   console.log(value)
    // })
    // this.customerForm.controls['firstName'].valueChanges
    // .subscribe(value=>{
    //   console.log(value)
    // })

  }
  minAndMaxValidator(MinAndMAxGroup:AbstractControl)
  {
    const min =parseInt(MinAndMAxGroup.get('min')?.value)
    const max =parseInt(MinAndMAxGroup.get('max')?.value)
    if(min<max)
    {
      return null;
    }
    else{
      return {minAndMax:true}
    }


  }
  handleNotify(notiFy:String)
  {
    const mobileControl= this.customerForm.controls['mobile']
    if(notiFy=="sms")
    {
      mobileControl.setValidators([Validators.required])
    }
  }

}
