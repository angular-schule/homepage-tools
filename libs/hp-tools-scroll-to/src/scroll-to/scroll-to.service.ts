import { Location, PopStateEvent } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import from 'polyfills';

@Injectable()
export class ScrollToService {

  private lastPoppedUrl: string;
  private skipRouteChange = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute, private location: Location) {

      if (typeof window !== 'undefined') {
        this.scrollToTopOnRouteChange();
        this.scrollToAnchorOnFragmentChange();
      };
  }

  /**
   * scrolls to the top when arriving at new site
   * (this is the normal behavior of a classic website),
   * and keeps the last scroll position on back button
   *
   * Only works for one back-click, but I'm fine with that for now...
   *
   * see: https://stackoverflow.com/a/44372167/2042765
   */
  private scrollToTopOnRouteChange() {

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });

    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event: NavigationEnd) => {

      /*
      if (this.skipRouteChange) {
        return this.skipRouteChange = false;
      }
      */

      // do nothing when #fragment is present (used for in-page scrolling)
      // tslint:disable-next-line:no-bitwise
      if (~event.url.indexOf('#')) {
        return;
      }

      if (event.url === this.lastPoppedUrl) {
        this.lastPoppedUrl = undefined;
      } else {
        window.scrollTo(0, 0);
      }

    });
  }

  /**
   * scrolls to elements by id
   * this uses URL fragments eg. /url#fragment which can be triggered via router
   */
  private scrollToAnchorOnFragmentChange() {

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        console.log('NavigationEnd:', event);

        const currentFragment = this.activatedRoute.snapshot.fragment;
        const el = currentFragment ? document.getElementById(currentFragment) : false;
        if (el) {

          // wait a bit to be sure
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' } as any);

            /*
            // this removes the fragment after a second, because it looks cool
            setTimeout(() => {
              this.skipRouteChange = true;
              const currentUrlWithoutHash = this.router.url.split('#')[0];
              this.router.navigate([currentUrlWithoutHash], { relativeTo: this.route });
            }, 1000);
            */

          }, 400);
        }
      });

    this.activatedRoute.fragment.subscribe(f => {
      console.log('test!');
    });
  }
}
