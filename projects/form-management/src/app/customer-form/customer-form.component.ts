import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  customerModel:any={
    firstName:'N',
    lastName:"k"
  }
  handleSubmit(customerForm:any)
  {
    console.log(customerForm.value)
  }
  loadCustomer()
  {
    this.customerModel={
      firstName:'Neha',
      lastName:"kadam"
    }
  }


}
