import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../app-services/product.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css',
})
export class MobileComponent implements OnInit {
  constructor(private _ProductService: ProductService) {}
  Products: any = [];

  ngOnInit() {
    this.Products = this._ProductService.mobiles;
  }
}
