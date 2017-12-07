/**
 * Configuration:
 *
 * scrollDelay
 *   - default: 0 (in milliseconds)
 *   - waits the given amount of ms until `scrollToTopOnRouteChange` starts
 *     this is pretty useful if you want to wait for animations to finish first
 *
 * removeFragment:
 *   - default: 1000 (in milliseconds)
 *   - this silently removes the fragment after a x milliseconds,
 *     which allows us to jump again to the position
 *     feature is disabled when falsy
 *
 * autoStart:
 *   - default: true
 *   - when set to `true` both scrollToTopOnRouteChange() and scrollToAnchorOnFragmentChange()
 *     will be executed automatically. when set to `true` you have to call those methods
 *     on your own.
 */
export class ScrollToConfig {

  scrollDelay?: number;
  removeFragment?: number;
  autoStart?: boolean;

}
