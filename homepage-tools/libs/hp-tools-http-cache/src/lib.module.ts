import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CachingInterceptor } from './http-cache/caching.interceptor';
import { HttpCacheService } from './http-cache/http-cache.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class HttpCacheModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpCacheModule,
      providers: [
        HttpClientModule,
        HttpCacheService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CachingInterceptor,
          multi: true,
        }
      ]
    };
  }
}
