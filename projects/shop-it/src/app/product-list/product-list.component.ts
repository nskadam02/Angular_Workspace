import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products :Array<any>=[{
    id: 1,
    name:"Laptop",
    price:1000,
    img:"assets/Laptop.png",
    isAvailable: true,
    description:"Laptop with hight battery power",
    specification:"1 TB HDD"
  },
  {
    id: 2,
    name:"Mobile",
    price:2000,
    img:"assets/Mobile.png",
    isAvailable: true,
    description:"Mobile with high battery power",
    specification:"4 GB RAM"
  }
]

}
