import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = 'A Boolean';
  isDisabled = false;
  products = [];
  private productsSubscription: Subscription;

  constructor(private productsService: ProductsService) {
   }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    })
  }

  onAddProduct(form) {
    if(form.valid) {
      // this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string){
    this.products = this.products.filter(p => p != productName);
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }

}
