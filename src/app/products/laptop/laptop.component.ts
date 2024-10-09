import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrl: './laptop.component.css',
})
export class LaptopComponent implements OnInit {
  constructor(private _PrdocutService: ProductService) {}
  Products: any = [];

  ngOnInit() {
    this.Products = this._PrdocutService.laptops;
  }
}
