import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UsersService} from './services/user.service';
import {HttpModule} from '@angular/http';
import {ContactFormService} from './contact/contact.service';
import { ContactFormComponent } from './contact/contact.component';

import { AppComponent } from './app.component';
import { MailComponent } from './mail//mail.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    MailComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ UsersService, ContactFormService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
