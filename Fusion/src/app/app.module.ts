import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpModule }             from '@angular/http';

import { BsDropdownModule }       from 'ngx-bootstrap';

import { AppComponent }           from './app.component';
import { NavComponent }           from './nav/nav.component';
import { CompletedCaseComponent } from './completed-case/completed-case.component';
import { CurrentCaseComponent }   from './current-case/current-case.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CompletedCaseComponent,
    CurrentCaseComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
