import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input("value")
  product:any;

  currentTab:number= 1

  reviews:Array<any>=[
    {star:5,body:"Good product",author:"ns.kadam"},
    {star:4,body:"Nice product",author:"ns.kadam"}
  ]
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
