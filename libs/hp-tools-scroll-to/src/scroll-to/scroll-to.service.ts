import { ScrollToConfig } from './scrollToConfig';
import './polyfills';

import { Location, PopStateEvent } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, NavigationStart } from '@angular/router';

@Injectable()
export class ScrollToService {

  private config: ScrollToConfig;
  private lastPoppedUrl: string;
  private ignoreThisRouteChange = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute, private location: Location,
    @Optional() config: ScrollToConfig) {
      this.setConfig(config);
    }

  /**
   * executes both
   * scrollToTopOnRouteChange() and
   * scrollToAnchorOnFragmentChange()
   */
  public autoStart() {
    if (this.config.autoStart) {
      this.scrollToTopOnRouteChange();
      this.scrollToAnchorOnFragmentChange();
    }
  }

  /**
   * config can be changed anytime to alter the defaults
   */
  public setConfig(config: ScrollToConfig) {
    this.config = Object.assign(
      {
        scrollDelay: 0,
        removeFragment: true,
        autoStart: true
      },
      config
    );
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
  public scrollToTopOnRouteChange() {

    if (typeof window === 'undefined') {
      return;
    }

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {

      if (this.config.removeFragment &&
          this.ignoreThisRouteChange) {
        return this.ignoreThisRouteChange = false;
      }

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
  public scrollToAnchorOnFragmentChange() {

    if (typeof window === 'undefined') {
      return;
    }

    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {

        this.scrollToAnchor()
      });
  }

  public scrollToAnchor() {
    setTimeout(() => {
      const currentFragment = this.activatedRoute.snapshot.fragment;
      const el = currentFragment ? document.getElementById(currentFragment) : false;
      if (el) {

        setTimeout(() => {
          el.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          });

          if (this.config.removeFragment) {
            setTimeout(() => {
              this.ignoreThisRouteChange = true;
              const currentUrlWithoutHash = this.router.url.split('#')[0];
              this.router.navigate([currentUrlWithoutHash], { relativeTo: this.activatedRoute });
            }, this.config.removeFragment);
          }

        }, this.config.scrollDelay);
      }
    }, 500)
  }
}
