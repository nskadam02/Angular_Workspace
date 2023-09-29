import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-IT';
  cart:Array<any> = [];
  isCartOpen=false
  toggleCart()
  {
    this.isCartOpen=!this.isCartOpen;
  }

}
