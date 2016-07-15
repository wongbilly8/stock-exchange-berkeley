/*
  creates a closure that does not pollute global space
*/
(function(el) {
  // so this variable is available only within here
  var minDeltaY;
  // not the recommended way to add events, but the easiest
  el.onwheel = function(e) {
    // we want to eliminate vertical scrolling
    if (e.deltaY) {
      // normalize
      if (minDeltaY > Math.abs(e.deltaY) || !minDeltaY) {
        minDeltaY = Math.abs(e.deltaY);
      }
      // scroll a decent amount
      el.scrollLeft += (e.deltaY / minDeltaY)
        * ((el.scrollWidth - el.clientWidth) * 0.05);
      // do not let other wheel events to fire
      e.stopPropagation();
      e.cancelBubble = true; // same for old IE
      // and we don't want the default action either
      e.preventDefault();
      e.returnValue = false; // same for old IE
    }
  }
  // support browsers that do not support DOM Level 3 wheel
  el.onmousewheel = function(e) {
    // old Internet Explorer
    if (!e) e = window.event;
    // we normalize the value so no need to guess how to convert
    e.deltaY = -e.wheelDelta;
    // we have done enough
    el.onwheel(e);
  }
})(document.getElementsByTagName('div')[0]);
// ^----- we pass "el" to the above function down here!