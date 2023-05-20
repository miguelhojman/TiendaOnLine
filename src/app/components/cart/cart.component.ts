import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  myCart$ = this.storeService.myCart$;
  suma: number = 0;
  constructor(private storeService: StoreService) {}

  totalAdd(precio: number, cantidad: number) {
    return precio * cantidad;
  }
  deleteProduct(id: String) {
    this.storeService.deleteProduct(id);
  }
  sumarUnits(id: String): void {
    const product = this.storeService.FindProductById(id);
    if (product) {
      product.cantidad++;
    }
  }
  restarUnits(id: String): void {
    const product = this.storeService.FindProductById(id);
    if (product && product.cantidad > 0) {
      product.cantidad--;
    } else {
      this.deleteProduct(id);
    }
  }
  totalCart() {
    return this.storeService.totalCart();
  }
}
