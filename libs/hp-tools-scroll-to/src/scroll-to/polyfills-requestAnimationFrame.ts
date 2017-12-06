// requestAnimationFrame polyfill by Erik Möller.
// fixes from Paul Irish and Tino Zijdel
// changed by Johannes Hoppe to TS
// MIT license
//
// source grabbed from here: https://github.com/iamdustan/smoothscroll/blob/19cc13f25f800988ee31814ecbf39fc400c14032/index.html

(function () {
  if (typeof window !== 'undefined') {

    let lastTime = 0;
    const vendors = ['ms', 'moz', 'webkit', 'o'];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
      (window as any).requestAnimationFrame = function (callback, element) {
        const currTime = new Date().getTime();
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        const id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }

    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
    }
  }
}());
