import { Component } from '@angular/core';
import { ProductService } from '../app-services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private _productService: ProductService) {}
  products = [
    {
      image: '/homepage/menClothing.jpg',
      title: "Men's Clothing",
      query: "men's clothing",
      category: 'sdfasdfasdfas',
    },
    {
      image: '/homepage/womenClothing.jpg',
      query: "women's clothing",
      title: "Women's Clothing",
      category: 'sdfasdfasdfas',
    },
    {
      image: '/homepage/jewelery.jpg',
      query: 'jewelery',
      title: 'Jewelery',
      category: 'sdfasdfasdfas',
    },
  ];
}
