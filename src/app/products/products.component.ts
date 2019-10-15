import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName = 'A Boolean';
  isDisabled = false;
  products = ['A Book', 'A Tree'];

  constructor() {
    
   }

  ngOnInit() {
    
  }

  onAddProduct(form) {
    if(form.valid) {
      this.products.push(form.value.productName);
    }
  }

  onRemoveProduct(productName: string){
    this.products = this.products.filter(p => p != productName);
  }

}
