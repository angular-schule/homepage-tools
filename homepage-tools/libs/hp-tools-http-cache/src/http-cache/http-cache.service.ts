import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheService } from 'ng2-cache';

@Injectable()
export class HttpCacheService {
  constructor(private cache: CacheService) {
    this.cache.set('HTTP_CACHE_SERVICE_ACTIVE', true);
  }

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    if (this.cache.exists(req.url)) {
      return new HttpResponse({
        body: this.cache.get(req.url),
      });
    }
  }

  put(req: HttpRequest<any>, resp: HttpResponse<any>) {
    // put some data to cache for 10 minutes (maxAge - in seconds)
    this.cache.set(req.url, resp.body, { maxAge: 10 * 60 });
  }
}
