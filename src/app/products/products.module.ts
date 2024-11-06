import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShortheadingPipe } from '../app-pipes/shortheading.pipe';
import { ProductComponent } from './product/product.component';
import { SmoothScrollarDirective } from './smooth-scrollar.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoadingComponent } from '../loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Sidenav2Component } from '../sidenav2/sidenav2.component';

const productRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product/:id', component: ProductComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ProductsComponent,
    Sidenav2Component,
    HomeComponent,
    ShortheadingPipe,
    ProductComponent,
    SmoothScrollarDirective,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ],
  exports: [ShortheadingPipe],
})
export class ProductsModule {}
