import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../app-services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  Products: any = [];
  count = -1;
  loading: boolean = true;
  params = '';
  constructor(private _ProductService: ProductService) {}
  ngOnInit() {
    this._ProductService.getProducts().subscribe({
      next: (resp) => {
        this.loading = false;
        this._ProductService.showProductsArray.next(resp);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._ProductService.showProductsArray.subscribe(
      (data) => (this.Products = data)
    );
  }
}
