import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToService } from './scroll-to/scroll-to.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class ScrollToModule {
  public static forRoot(): ScrollToModule {
    return {
      ngModule: ScrollToModule,
      providers: [
        ScrollToService
      ]
    };
  }
}
