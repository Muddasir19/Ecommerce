import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private _ProductService: ProductService) {
    console.log('Product Component');
  }

  Products: any = [];

  ngOnInit() {
    this.Products = [
      ...this._ProductService.laptops,
      ...this._ProductService.computers,
      ...this._ProductService.mobiles,
    ];
  }
}
