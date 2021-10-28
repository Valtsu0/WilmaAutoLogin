function simulateClick(obj) {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,
    0, 0, 0, 0, 0, false, false, false, false, 0, null);
  obj.dispatchEvent(evt);
}

var elements = document.getElementsByClassName("pull-left oid-login-button")
if (elements.length > 0) {
	simulateClick(elements[0]);
}
