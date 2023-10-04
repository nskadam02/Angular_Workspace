import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  isFormOpen = false;
  reviewForm!:FormGroup

  reviewFormEmitter:EventEmitter<any> = new EventEmitter()

  constructor(private formBuilder:FormBuilder)
  {
    
  }
  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      author:['',[Validators.required]],
      star:['',[Validators.required]],
      body:['',[Validators.required]],
    })
  }
  toggelForm()
  {
    this.isFormOpen =!this.isFormOpen;
  }
  formSubmit(event:any)
  {
    if(this.reviewForm.valid){
      console.log(this.reviewForm.value)
      this.reviewFormEmitter.emit(this.reviewForm.value)
      this.reviewForm.reset()
      this.isFormOpen = false;

    }

  }

}
