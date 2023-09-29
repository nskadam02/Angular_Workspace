import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product:any;

  currentTab:number= 1
  handleBuy(event:MouseEvent)
  {
    console.log(event)
  }
  handleTabChnage(index:number)
  {
    this.currentTab = index;
  }
  isTabSelected(tab:number):boolean
  {
    return this.currentTab===tab;
  }

}
