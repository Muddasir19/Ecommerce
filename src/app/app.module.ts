import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Sidenav2Component } from './sidenav2/sidenav2.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule } from './app.routing.module';
import { ProductService } from './product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Contactus1Component } from './contactus1/contactus1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidenavComponent,
    Sidenav2Component,
    FooterComponent,
    AboutComponent,
    ContactusComponent,
    Contactus1Component,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('App Module');
  }
}
