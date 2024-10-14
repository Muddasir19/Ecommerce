import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
})
export class ContactusComponent {
  constructor() {}
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: 0,
    subject: '',
    message: '',
  };
  selectedQuery: string = 'General Query';

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.formData.firstName = form.value.firstName;
    this.formData.lastName = form.value.lastName;
    this.formData.email = form.value.email;
    this.formData.phoneNo = form.value.phoneNumber;
    this.formData.subject = form.value.Query;
    this.formData.message = form.value.message;

    alert(
      this.formData.firstName +
        ' ' +
        this.formData.lastName +
        ' ' +
        this.formData.email +
        ' ' +
        this.formData.phoneNo +
        ' ' +
        this.formData.subject +
        ' ' +
        this.formData.message
    );

    form.reset();
  }
}
