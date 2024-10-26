import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../app-services/product.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css',
})
export class ComputerComponent implements OnInit {
  constructor(private _productService: ProductService) {}

  Products: any = [];

  ngOnInit() {
    this.Products = this._productService.computers;
  }
}
