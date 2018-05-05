import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropDownItem } from './directives/dropDownItem';
import { DropDownMain } from './directives/dropDownMain';


@NgModule({
  declarations: [
    AppComponent,
    DropDownItem,
    DropDownMain
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
