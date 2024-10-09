import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';

const serviceRoutes: Routes = [{ path: '', component: ServicesComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(serviceRoutes)],
})
export class ServicesModule {
  constructor() {
    console.log('Services Module');
  }
}
