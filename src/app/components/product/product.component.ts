import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
  addToCart(product: Product): void {
    console.log(product);
    return this.storeService.addProduct(product);
  }
}
