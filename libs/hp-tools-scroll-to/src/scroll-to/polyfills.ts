import './polyfills-requestAnimationFrame';

// https://www.npmjs.com/package/smoothscroll-polyfill
// polyfills the scroll behavior specification
import * as smoothscroll from 'smoothscroll-polyfill';

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

