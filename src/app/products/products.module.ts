import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ComputerComponent } from './computer/computer.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShortheadingPipe } from '../app-pipes/shortheading.pipe';
import { ProductComponent } from './product/product.component';
import { SmoothScrollarDirective } from './smooth-scrollar.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

const productRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'computer', component: ComputerComponent },
      { path: 'mobile', component: MobileComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    MobileComponent,
    ComputerComponent,
    HomeComponent,
    ShortheadingPipe,
    ProductComponent,
    SmoothScrollarDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  exports: [ShortheadingPipe],
})
export class ProductsModule {}
