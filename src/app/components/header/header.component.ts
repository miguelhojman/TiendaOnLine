import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  viewCart: boolean = false;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {}
  onToggleCart() {
    this.viewCart = !this.viewCart;
  }
  totalCantidad() {
    return this.storeService.totalCantidad();
  }
}
