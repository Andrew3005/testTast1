import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { DropDownMain } from './directives/dropDownMain';
import { DropDownItem } from './directives/dropDownItem';


@NgModule({
  declarations: [
    AppComponent,
    DropDownMain,
    DropDownItem
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
