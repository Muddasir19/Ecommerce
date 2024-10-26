import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus1',
  templateUrl: './contactus1.component.html',
  styleUrl: './contactus1.component.css',
})
export class Contactus1Component implements OnInit {
  constructor() {
    console.log('Contact us');
  }
  myReactiveForm!: FormGroup;

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
      }),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNo: new FormControl(null, Validators.required),
      query: new FormControl('Other'),
      message: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm);
  }
}
