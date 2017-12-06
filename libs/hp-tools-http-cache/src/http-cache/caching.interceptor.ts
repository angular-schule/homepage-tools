import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { HttpResponse } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpCacheService } from './http-cache.service';

// adapted from https://angular.io/guide/http#caching
@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private httpCache: HttpCacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Before doing anything, it's important to only cache GET requests.
    // Skip this interceptor if the request method isn't GET.
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    // First, check the cache to see if this request exists.
    const cachedResponse = this.httpCache.get(req);
    if (cachedResponse) {
      // A cached response exists. Serve it instead of forwarding the request to the next handler.
      return Observable.of(cachedResponse);
    }

    // No cached response exists. Go to the network, and cache the response when it arrives.
    return next.handle(req).do(event => {
      // Remember, there may be other events besides just the response.
      if (event instanceof HttpResponse) {
        // Update the cache.
        this.httpCache.put(req, event);
      }
    });
  }
}
