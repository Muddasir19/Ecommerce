import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-orderreport',
  templateUrl: './orderreport.component.html',
  styleUrl: './orderreport.component.css',
})
export class OrderReportComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
