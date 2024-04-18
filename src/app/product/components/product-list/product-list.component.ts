import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../providers/product.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductList } from '../../product.types';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  productService = inject(ProductService);
  products$: Observable<ProductList> = new BehaviorSubject([]);

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}
