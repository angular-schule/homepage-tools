import { ScrollToModule, ScrollToService } from '@angular-schule/hp-tools-scroll-to';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDriveComponent } from './scroll-to/test-drive/test-drive.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(scrollToService: ScrollToService) {
    scrollToService.start();
  }
}
