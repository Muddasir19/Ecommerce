import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../../env';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(public http: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.http.get<any>(`${environment.baseURL}/products`);
  }

  public getSingleProduct(id: any): Observable<any> {
    return this.http.get<any>(`${environment.baseURL}/products/${id}`);
  }

  public getCategory(category: any): Observable<any> {
    return this.http.get<any>(
      `${environment.baseURL}/products/Category/${category}`
    );
  }
  public products = new BehaviorSubject([]);
  public showProductsArray = new BehaviorSubject([]);
  public singleProduct = {};
  public summary = new BehaviorSubject({
    items: 0,
    shippingFee: 10,
    subTotal: 0,
    total: 0,
  });

  public numberOfItemInCart = new BehaviorSubject<number>(0);
  public cartProductsArray = new BehaviorSubject<any[]>([]);

  laptops = [
    {
      type: 'Laptop',
      image: '/l1.avif',
      price: '$1200',
      description:
        'High-performance laptop with 16GB RAM, 512GB SSD, and Intel i7 processor.',
    },
    {
      type: 'Laptop',
      image: '/l2.avif',
      price: '$1000',
      description:
        'Lightweight laptop with 8GB RAM, 256GB SSD, and Intel i5 processor.',
    },
    {
      type: 'Laptop',
      image: '/l3.avif',
      price: '$1500',
      description: 'Gaming laptop with NVIDIA GTX 1650, 16GB RAM, and 1TB SSD.',
    },
    {
      type: 'Laptop',
      image: '/l4.avif',
      price: '$1800',
      description: 'Ultra-thin laptop with Intel i9, 32GB RAM, and 1TB SSD.',
    },
    {
      type: 'Laptop',
      image: '/l5.avif',
      price: '$750',
      description:
        'Budget laptop with 8GB RAM, 256GB SSD, and Intel i3 processor.',
    },
  ];
  computers = [
    {
      type: 'Computer',
      image: '/c1.avif',
      price: '$1500',
      description:
        'Powerful desktop PC with AMD Ryzen 7, 32GB RAM, and 1TB SSD.',
    },
    {
      type: 'Computer',
      image: '/c2.avif',
      price: '$2000',
      description:
        'Gaming desktop with Intel i9, 64GB RAM, 2TB SSD, and NVIDIA RTX 3080.',
    },
    {
      type: 'Computer',
      image: '/c3.avif',
      price: '$1000',
      description: 'Office desktop with Intel i5, 16GB RAM, and 512GB SSD.',
    },
    {
      type: 'Computer',
      image: '/c4.avif',
      price: '$2500',
      description:
        'High-end workstation with Xeon processor, 128GB RAM, and 4TB SSD.',
    },
    {
      type: 'Computer',
      image: '/c5.webp',
      price: '$850',
      description: 'Compact desktop with AMD Ryzen 5, 8GB RAM, and 256GB SSD.',
    },
  ];
  mobiles = [
    {
      type: 'Mobile',
      image: '/m1.avif',
      price: '$800',
      description:
        '5G smartphone with 6.5-inch display, 128GB storage, and 5000mAh battery.',
    },
    {
      type: 'Mobile',
      image: '/m2.avif',
      price: '$950',
      description:
        'Flagship mobile phone with 6.8-inch OLED display, 256GB storage, and 4500mAh battery.',
    },
    {
      type: 'Mobile',
      image: '/m3.avif',
      price: '$1200',
      description:
        'Pro smartphone with triple camera system, 512GB storage, and 6000mAh battery.',
    },
    {
      type: 'Mobile',
      image: '/m4.avif',
      price: '$500',
      description:
        'Affordable smartphone with 6.1-inch display, 64GB storage, and 4000mAh battery.',
    },
    {
      type: 'Mobile',
      image: '/m5.webp',
      price: '$650',
      description:
        'Mid-range smartphone with 6.4-inch AMOLED display, 128GB storage, and 4500mAh battery.',
    },
  ];
}
