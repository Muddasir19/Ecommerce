import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../app-services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest, take } from 'rxjs';
import { LocalStorageService } from '../../app-services/local-storage.service';
import { AuthService } from '../../app-services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private snackBar: MatSnackBar,
    private _localStorageService: LocalStorageService,
    private _authService: AuthService
  ) {}

  product: any;
  loading: boolean = true;
  productId: any = '';
  count: number = 0;
  cartProducts: any = [];
  Summary: any = { items: 0, shippingFee: 10, subTotal: 0, total: 0 };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => (this.productId = params.get('id'))
    );

    let localITems = this._localStorageService.getItem();
    let localSummary = this._localStorageService.getSummary();
    let count = this._localStorageService.getCount() || '0';

    if (localITems.length != 0) {
      this.cartProducts = localITems;
      this.Summary = localSummary;
    }

    this._productService.summary.next(this.Summary);
    this._productService.cartProductsArray.next(this.cartProducts);

    this._productService.numberOfItemInCart.next(parseInt(count));

    // Fetch product details only if productId exists
    if (this.productId) {
      this._productService.getSingleProduct(this.productId).subscribe({
        next: (resp) => {
          this.loading = false;
          this._productService.singleProduct = resp;
          this.product = resp;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }

    // subscribe no of item
    this._productService.numberOfItemInCart.subscribe((val) => {
      this.count = val;
      this._localStorageService.addCount(this.count);
    });

    // subscribe product
    this._productService.cartProductsArray.subscribe((products) => {
      this.cartProducts = products;

      this._localStorageService.addItem(this.cartProducts);

      // this.addProductToUser(products);
    });

    this._productService.summary.subscribe((sum: any) => {
      this.Summary = sum;
      this._localStorageService.addSummary(this.Summary);
    });
  }

  addItemToCart() {
    const foundProduct = this.cartProducts.find(
      (prod: any) => prod?.id === this.product.id
    );

    if (foundProduct) {
      foundProduct.quantity++;
    } else {
      const newProduct = { ...this.product, quantity: 1 };
      this.cartProducts.push(newProduct);
    }

    // Update cart product array and count
    !foundProduct && this._productService.numberOfItemInCart.next(++this.count);
    this._productService.cartProductsArray.next([...this.cartProducts]);

    // Summary report and snackbar notification
    this.updateSummary(this.product.price);
    this.showSnackbar('Item added to your cart!');
  }

  private updateSummary(price: number) {
    // this.Summary.total = this.Summary = {
    //   ...this.Summary,
    //   subTotal: this.Summary.subTotal + price,
    //   total: this.Summary.subTotal + this.Summary.shippingFee,
    //   items: this.Summary.items + 1,
    // };

    this.Summary.subTotal += price;
    this.Summary.total = this.Summary.subTotal + this.Summary.shippingFee;
    this.Summary.items += 1;

    this._productService.summary.next(this.Summary);
    this._localStorageService.addSummary(this.Summary);
  }

  private showSnackbar(message: string) {
    this.snackBar.open(message, '', {
      duration: 500,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  addProductToUser(product: any) {
    const user = this._authService.loggedInUser.getValue();

    if (user && user.isLoggedIn) {
      user.products.push(product);
      this._authService.loggedInUser.next(user);
      // this._authService.loggedInUser.subscribe((e) => console.log(e));
    }
  }
}
