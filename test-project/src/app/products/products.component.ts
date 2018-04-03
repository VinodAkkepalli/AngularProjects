import { Component } from '@angular/core';

@Component({
  selector : 'app-products',
  templateUrl : './products.component.html'
})
export class ProductsComponent{
  list : string[] = [];

  onAddNewClick(productName) {
    this.list.push(productName);
  }

}
