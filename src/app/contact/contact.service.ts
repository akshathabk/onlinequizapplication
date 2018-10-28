import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Injectable()
export class ContactFormService {

  constructor(public formBuilder: FormBuilder, private http: Http) { }

  contactForm: FormGroup;
  formSubmitted: boolean = false;


  buildForm() {
    this.contactForm = this.formBuilder.group({
      userFirstName: this.formBuilder.control(null, Validators.required),
      userLastName: this.formBuilder.control(null, Validators.required)
    });
  }

  onSubmitForm() {
    this.http.post('http://localhost:3000/send-mail', this.contactForm.value);
    console.log(this.contactForm.value);
    this.formSubmitted = true;
    this.contactForm.reset();
  }

}