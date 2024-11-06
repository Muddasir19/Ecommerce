import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../app-services/product.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(
    private _ProductService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((resp: any) => {
      let queryParam = resp.get('for');
      console.log(queryParam);

      if (queryParam) {
        this._ProductService.getCategory(queryParam).subscribe({
          next: (resp) => {
            this.loading = false;
            this.Products = resp;
            this._ProductService.products.next(resp);
            console.log(resp);
          },
        });
      } else {
        this._ProductService.getProducts().subscribe({
          next: (resp) => {
            this.loading = false;
            this.Products = resp;
            this._ProductService.products.next(resp);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
    this._ProductService.showProductsArray.subscribe({
      next: (resp) => {
        this.Products = resp;
      },
    });
  }
}
