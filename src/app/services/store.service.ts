import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  baseURL: String = 'https://api.escuelajs.co/api/v1/';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    const respuesta = this.http.get<Product[]>(this.baseURL + 'products');
    return respuesta;
  }
}
