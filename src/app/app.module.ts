import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule } from './app.routing.module';
import { ProductService } from './app-services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Contactus1Component } from './contactus1/contactus1.component';
import { AuthService } from './app-services/auth.service';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ProductsModule } from './products/products.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ServicesModule } from './services/services.module';

import { DialogComponent } from './dialog/dialog.component';
import { SharedModule } from './app-modules/shared.module';
import { OrderReportComponent } from './orderreport/orderreport.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidenavComponent,
    FooterComponent,
    AboutComponent,
    ContactusComponent,
    Contactus1Component,
    LoginComponent,
    PagenotfoundComponent,
    SignupComponent,
    CartComponent,
    DialogComponent,
    OrderReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ProductsModule,
    ServicesModule,
    SharedModule,
  ],
  providers: [ProductService, AuthService, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('App Module');
  }
}
