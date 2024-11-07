import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShortheadingPipe } from '../app-pipes/shortheading.pipe';
import { ProductComponent } from './product/product.component';
import { SmoothScrollarDirective } from './smooth-scrollar.directive';
import { Sidenav2Component } from '../sidenav2/sidenav2.component';
import { LoadingComponent } from '../loading/loading.component';
import { SharedModule } from '../app-modules/shared.module';

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
  imports: [CommonModule, SharedModule, RouterModule.forChild(productRoutes)],
  exports: [ShortheadingPipe],
})
export class ProductsModule {}
