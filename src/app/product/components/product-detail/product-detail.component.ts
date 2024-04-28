import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../providers/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { filter, map, Observable, Subject, switchMap } from 'rxjs';
import { Product } from '../../product.types';
import { notNullOrUndefined } from '../../../shared/utils';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../cart/providers/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  productService = inject(ProductService);
  cartService = inject(CartService);
  route = inject(ActivatedRoute);

  product$: Observable<Product | undefined> = new Subject();
  quantity: number = 1;
  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      map(pm => pm.get('productId')),
      filter(notNullOrUndefined),
      switchMap(id => {
        return this.productService.getProductById(+id);
      })
    );
  }

  onAddToCart(product: Product) {
    this.cartService.addItem({
      id: product.id,
      price: product.price,
      productInfo: product,
      quantity: +this.quantity,
    });

    window.alert('Your product has been added to the cart!');
  }
}
