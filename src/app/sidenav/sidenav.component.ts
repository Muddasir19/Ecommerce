import { Component } from '@angular/core';
import { ProductService } from '../app-services/product.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  constructor(private _productService: ProductService) {}
}
