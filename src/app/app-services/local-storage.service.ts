import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public addItem(products: any) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  public addCount(count: any) {
    localStorage.setItem('count', count);
  }

  public getItem() {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  }
  public getCount() {
    return localStorage.getItem('count');
  }

  public addSummary(summary: any) {
    return localStorage.setItem('summary', JSON.stringify(summary));
  }
  public getSummary() {
    let summary = localStorage.getItem('summary');
    return summary ? JSON.parse(summary) : [];
  }
}
