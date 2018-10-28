import { Component } from '@angular/core';

import { ContactFormService } from './contact.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact.html',
//   styleUrls: ['./contact.component.css'],
  providers: [ContactFormService]
})
export class ContactFormComponent {

  constructor(private formService: ContactFormService) {
    formService.buildForm();
  }

}