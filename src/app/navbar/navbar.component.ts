import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app-services/auth.service';
import { Router } from '@angular/router';
import { ProductService } from '../app-services/product.service';
import { LocalStorageService } from '../app-services/local-storage.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private _authService: AuthService,
    private _productService: ProductService,
    private _loaclStorage: LocalStorageService
  ) {}
  public items: number = -1;

  loggedInUserName: string = '';

  ngOnInit(): void {
    this._authService.loggedInUsername.subscribe((val: string) => {
      this.loggedInUserName = val;
    });
    this._productService.numberOfItemInCart.subscribe(
      (value) => (this.items = value)
    );
    if (localStorage.getItem('username')) {
      this._authService.loggedInUsername.next(localStorage.getItem('username'));
      let count = this._loaclStorage.getCount() ?? '0';
      this.items = parseInt(count);
      this.router.navigate(['/home']);
    }
  }

  public toggleLogout() {
    this.router.navigate(['/login']);
    this._authService.loggedInUsername.next('');
    this.items = 0;
    localStorage.clear();
  }
}
