import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-contactus1',
  templateUrl: './contactus1.component.html',
  styleUrl: './contactus1.component.css',
})
export class Contactus1Component implements OnInit {
  constructor(private dialog: MatDialog) {}
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
      skills: new FormArray([new FormControl(null)]),
      message: new FormControl(null, Validators.required),
    });
  }

  get skillsFormValue(): FormArray {
    return this.myReactiveForm.get('skills') as FormArray;
  }

  onSubmit() {
    console.log(this.myReactiveForm.value);
    this.dialog
      .open(DialogComponent, {
        data: {
          title: 'Confirmation',
          message: 'Do You Want to Submit?',
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (!res) return;

        this.myReactiveForm.reset();
      });
  }
}
