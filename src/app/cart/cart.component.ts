import { Component, OnInit } from '@angular/core';
import { ProductService } from '../app-services/product.service';
import { take } from 'rxjs';
import { LocalStorageService } from '../app-services/local-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../app-services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  Products: any = [];
  constructor(
    private _productService: ProductService,
    private _localStorageService: LocalStorageService,
    private snackBar: MatSnackBar,
    private _authService: AuthService
  ) {}

  Summary: any = { items: 0, shippingFee: 0, subTotal: 0, total: 0 };
  loggedInUser = '';

  numberOfItemsSelected = 0;
  ngOnInit(): void {
    this._authService.loggedInUsername.subscribe(
      (val) => (this.loggedInUser = val)
    );

    let localITems = this._localStorageService.getItem();
    let localSummary = this._localStorageService.getSummary();

    this.Products = localITems;
    this.Summary = localSummary;

    // this.subscribeDataFromService();

    this._productService.summary.next(this.Summary);
    this._productService.cartProductsArray.next(this.Products);
  }

  subscribeDataFromService() {
    //subscribe no of items from service
    this._productService.numberOfItemInCart.subscribe(
      (val) => (this.numberOfItemsSelected = val)
    );
    //subscribe cardProductArray from service
    this._productService.cartProductsArray
      .pipe(take(1))
      .subscribe((prod) => (this.Products = prod));
    //subscribe summary from service
    this._productService.summary.subscribe(
      (value: any) => (this.Summary = value)
    );
  }

  quantity(val: any, id: any) {
    const found = this.Products.find((product: any) => product.id == id);

    if (!found) return;

    const updatedQuantity = found.quantity + val;

    if (updatedQuantity <= 0) {
      const index = this.Products.indexOf(found);
      if (index !== -1) {
        this.Products.splice(index, 1);
        this.numberOfItemsSelected--;
        this.Summary.items--;
        this._productService.numberOfItemInCart.next(
          this.numberOfItemsSelected
        );
        this.Summary.subTotal -= found.price;
        this.Summary.total = this.Summary.subTotal + this.Summary.shippingFee;
      }
    } else {
      found.quantity = updatedQuantity;
      if (val == 1) {
        this.Summary.subTotal += found.price;
        this.Summary.items++;
      } else {
        this.Summary.subTotal -= found.price;
        this.Summary.items--;
      }

      this.Summary.total = this.Summary.subTotal + this.Summary.shippingFee;
    }
    this._localStorageService.addItem(this.Products);
    this._productService.summary.next(this.Summary);
  }

  // Proceed to checkOut
  checkOut() {
    this.showSnackbar('Your Order is Placed');
    this._productService.summary.next({
      items: 0,
      shippingFee: 10,
      subTotal: 0,
      total: 0,
    });
    this._productService.cartProductsArray.next([]);
    this._productService.numberOfItemInCart.next(0);
    this.Products = [];
  }

  clearCart() {
    this.showSnackbar('Cart Empty');
    this._productService.summary.next({
      items: 0,
      shippingFee: 10,
      subTotal: 0,
      total: 0,
    });
    this._productService.cartProductsArray.next([]);
    this._productService.numberOfItemInCart.next(0);
    this.Products = [];

    localStorage.removeItem('products');
    localStorage.removeItem('summary');
    localStorage.setItem('count', '0');
  }

  private showSnackbar(message: string) {
    this.snackBar.open(message, '', {
      duration: 500,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  removeItem(id: any) {
    const found = this.Products.find((product: any) => product.id == id);
    const index = this.Products.indexOf(found);

    console.log(found);

    this.numberOfItemsSelected--;

    this.Summary.items = this.Summary.items - parseInt(found.quantity);

    this.Summary.subTotal =
      this.Summary.subTotal - found.quantity * found.price;

    this.Summary.total = this.Summary.subTotal + this.Summary.shippingFee;

    this.Products.splice(index, 1);
    this._productService.numberOfItemInCart.next(this.numberOfItemsSelected);

    this._localStorageService.addItem(this.Products);
    this._productService.summary.next(this.Summary);
    // localStorage.setItem('products', JSON.stringify(this.Products));
    // localStorage.setItem('products', JSON.stringify(this.Summary));
  }
}
