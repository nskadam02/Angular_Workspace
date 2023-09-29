import { Component, ContentChild, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {
  @Input()
  cart!: Array<any>;

  @ViewChild("cardBody")
  cardBody!:ElementRef;

  @ContentChild("comp")
  comp!:ElementRef

  constructor()
  {
    console.log("cart view constructor")
  }
  ngOnChanges(changes:SimpleChanges)
  {
    
    console.log("cart view chanages")

  }
  ngOnInit()
  {
    console.log("cart view oninit")
  }
  
  ngAfterContentInit()
  {
    console.log("cart view contentinit")
    this.comp.nativeElement.style.color = "blue"
  }
  ngAfterViewInit()
  {
    console.log("cart view view init")
    this.cardBody.nativeElement.addEventListener("mouseenter",(e:any)=>{
     e.target.style.cursor = "pointer"
    })

  }
  ngOnDestroy()
  {
    console.log("cart view destroy")
  }
  
}
