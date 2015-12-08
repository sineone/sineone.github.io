(function () { "use strict";
var Main = function() { }
Main.main = function() {
	var e = window.document.getElementById("logo");
	var r = 0.;
	var loop;
	var loop1 = null;
	loop1 = function(_) {
		r += 0.15;
		e.setAttribute("style","-webkit-transform : rotate(" + r + "deg); transform : rotate(" + r + "deg)");
		try {
			var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(loop2) {
				window.setTimeout(loop2,17);
			};
			requestAnimationFrame(loop1);
			return true;
		} catch( e1 ) {
			return false;
		}
	};
	loop = loop1;
	loop(null);
	window.document.body.className = "lang_" + window.navigator.language.toLowerCase().split("-")[0];
}
Main.main();
})();
