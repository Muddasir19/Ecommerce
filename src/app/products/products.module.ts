import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ComputerComponent } from './computer/computer.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const productRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: '', component: HomeComponent },
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
  ],
  imports: [CommonModule, RouterModule.forChild(productRoutes)],
})
export class ProductsModule {
  constructor() {
    console.log('Product Module');
  }
}
