import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheService } from 'ng2-cache';

import { CachingInterceptor } from './caching.interceptor';
import { HttpCacheService } from './http-cache.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CacheService,
    HttpClientModule,
    HttpCacheService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true,
    }
  ]
})
export class HttpCacheModule { }
