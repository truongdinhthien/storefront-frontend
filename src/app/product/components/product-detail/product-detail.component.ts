import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../providers/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { filter, map, Observable, Subject, switchMap } from 'rxjs';
import { Product } from '../../product.types';
import { notNullOrUndefined } from '../../../shared/utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  productService = inject(ProductService);
  route = inject(ActivatedRoute);

  product$: Observable<Product | undefined> = new Subject();
  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      map(pm => pm.get('productId')),
      filter(notNullOrUndefined),
      switchMap(id => {
        return this.productService.getProductById(+id);
      })
    );
  }
}
