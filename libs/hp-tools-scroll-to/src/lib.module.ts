import { ScrollToConfig } from './scroll-to/scrollToConfig';
import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToService } from './scroll-to/scroll-to.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class ScrollToModule {
  public static forRoot(config?: ScrollToConfig): ModuleWithProviders {
    return {
      ngModule: ScrollToModule,
      providers: [
        ScrollToService,
        { provide: ScrollToConfig, useValue: config }
      ]
    };
  }

  constructor(@Optional() service: ScrollToService) {
    if (service) {
      service.autoStart();
    }
  }
}
