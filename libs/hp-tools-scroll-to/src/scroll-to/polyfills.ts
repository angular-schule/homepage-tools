import './polyfills-requestAnimationFrame';

// https://www.npmjs.com/package/smoothscroll-polyfill
// polyfills the scroll behavior specification
import { polyfill } from 'smoothscroll-polyfill';

if (typeof window !== 'undefined') {
  polyfill.polyfill();
}

