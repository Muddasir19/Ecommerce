import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Ecomerence';
  constructor(private dialog: MatDialog) {}

  formGroupData!: FormGroup;

  messages = [
    { text: 'Summer items Flat 95% Off', class: 'carousel-item active' },
    {
      text: 'Delivery charges are Rs.250/-Free shipping on minimum order of Rs 5,000/-Sales items will not be exchanged or refunded',
      class: 'carousel-item',
    },
    { text: 'New Arrivals!!', class: 'carousel-item' },
  ];

  ngOnInit(): void {
    this.formGroupData = new FormGroup({});
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
