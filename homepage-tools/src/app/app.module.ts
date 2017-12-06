import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollToModule } from '@angular-schule/hp-tools-scroll-to';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
