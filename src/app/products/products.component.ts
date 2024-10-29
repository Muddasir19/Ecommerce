import { Component, OnInit } from '@angular/core';
import { ProductService } from '../app-services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  // products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.productService.getProducts().subscribe({
    //   next: (resp) => {
    //     this.productService.products = resp;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }
}
