# 0.0.1-alpha.9 (2019-05-09)
* uses original `smoothscroll-polyfil` again,
  see https://github.com/iamdustan/smoothscroll/pull/97#issuecomment-368303423

# 0.0.1-alpha.7 (2018-06-21)
* method `scrollToAnchor` made public, can be called from user code, too
  this is necessary when the anchor is not initially available (eg. content with anchor is loaded via AJAX)

# 0.0.1-alpha.6 (2018-06-20)
* small bugfix

# 0.0.1-alpha.5 (2017-12-1)
* also scrolls on hard reload now

# 0.0.1-alpha.4 (2017-12-12)

### Bug Fixes
* [smoothscroll-polyfill](https://github.com/iamdustan/smoothscroll) v0.4.0 was not running in node any longer, this was breaking Angular SSR support
* [PR #97](https://github.com/iamdustan/smoothscroll/pull/97) for smoothscroll-polyfill is pending and a patched version is included in this package


# 0.0.1-alpha.0 (2017-12-08)
* Initial release

