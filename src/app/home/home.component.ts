import { Component, OnInit } from '@angular/core';
import { ProductService } from '../app-services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(
    private _ProductService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  ProductsArray: any;
  LimitedProducts: any;
  d: any;
  a: any;
  catalogDetails: any;

  carouselDetails = [
    {
      class: 'carousel-item active',
      image: 'homepage/1.avif',
      heading: 'First slide label',
      para: 'Some representative placeholder content for the first slide.',
    },
    {
      class: 'carousel-item',
      image: 'homepage/new2.jpg',
      heading: 'Second slide label',
      para: 'Some representative placeholder content for the first slide.',
    },
    {
      class: 'carousel-item',
      image: 'homepage/new3.jpg',
      heading: 'Third slide label',
      para: 'Some representative placeholder content for the first slide.',
    },
  ];
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

  ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next: (products) => {
        this.ProductsArray = products;
        this.LimitedProducts = products.filter(
          (item: any, index: number) => index < 5
        );
        products.sort((a: any, b: any) => a.price - b.price);
        this.a = products.filter((item: any, index: number) => index < 5);
        products.sort((a: any, b: any) => b.price - a.price);
        this.d = products.filter((item: any, index: number) => index < 5);

        this.catalogDetails = [
          {
            class: 'carousel-item active',
            // catalogProducts: this.LimitedProducts,
            catalogProducts: products.slice(0, 5),
          },
          {
            class: 'carousel-item',
            // catalogProducts: this.a,
            catalogProducts: products.slice(5, 10),
          },
          {
            class: 'carousel-item',
            // catalogProducts: this.d,
            catalogProducts: products.slice(10, 15),
          },
          {
            class: 'carousel-item',
            // catalogProducts: this.d,
            catalogProducts: products.slice(15, 20),
          },
        ];
      },
    });

    console.log(this.catalogDetails);
  }
}
