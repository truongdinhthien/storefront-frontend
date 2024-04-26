import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductList } from '../product.types';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);

  getProducts() {
    return this.http.get<ProductList>('http://localhost:4200/assets/data.json');
  }

  getProductById(id: number) {
    return this.http
      .get<ProductList>('http://localhost:4200/assets/data.json')
      .pipe(
        map(products => {
          return products.find(product => id === product.id);
        })
      );
  }
}
