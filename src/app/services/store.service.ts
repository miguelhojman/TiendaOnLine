import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private baseURL: String = 'https://api.escuelajs.co/api/v1/';

  //array donde se agregan las compras al carrito
  private myList: Product[] = [];

  //creo un observable
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor(private http: HttpClient) {}
  //metodos
  getAllProducts(): Observable<Product[]> {
    const respuesta = this.http.get<Product[]>(this.baseURL + 'products');
    return respuesta;
  }
  addProduct(product: Product) {
    if (this.myList.length === 0) {
      product.cantidad = 1;
      this.myList.push(product);
      this.myCart.next(this.myList);
    } else {
      const productExiste = this.myList.find((element) => {
        return element.id === product.id;
      });
      if (productExiste) {
        productExiste.cantidad++;
        this.myCart.next(this.myList);
      } else {
        product.cantidad = 1;
        this.myList.push(product);
        this.myCart.next(this.myList);
      }
    }
  }
  deleteProduct(id: String) {
    this.myList = this.myList.filter((item) => {
      return item.id !== id;
    });
    this.myCart.next(this.myList);
  }
  FindProductById(id: String) {
    return this.myList.find((item) => {
      return item.id === id;
    });
  }
  totalCart() {
    const result = this.myList.reduce(function (acc, product) {
      return acc + product.price * product.cantidad;
    }, 0);
    return result;
  }
}
