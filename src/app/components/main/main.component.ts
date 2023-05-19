import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  products: Product[] = [];
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
