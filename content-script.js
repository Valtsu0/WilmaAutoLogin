function simulateClick(obj) {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,
    0, 0, 0, 0, 0, false, false, false, false, 0, null);
  console.log("Clicked")
  console.log(obj)
  var canceled = !obj.dispatchEvent(evt);      
/*

  if(canceled) {
    // A handler called preventDefault
    alert("canceled");
  } else {
    // None of the handlers called preventDefault
    alert("not canceled");
  }
  */
}

var what = document.getElementsByClassName("pull-left oid-login-button")
if (what.length > 0) {
	console.log("Login page detected. Executing click protocol")
	simulateClick(what[0]);
} else {
	console.log("No login button detected.")
}