/**
 * Configuration:
 *
 * scrollDelay
 *   - default: 400 (in milliseconds)
 *   - waits the given amount of ms until `scrollToTopOnRouteChange` starts
 *     this is pretty usefull if you want to wait for animations to finish first
 *
 * removeFragment:
 *   - default: 1000 (in milliseconds)
 *   - this silently removes the fragment after a second, which allows us to jump again to the position
 *     feature is disabled when falsy
 */
export class ScrollToConfig {

  scrollDelay?: number;
  removeFragment?: number;

}
