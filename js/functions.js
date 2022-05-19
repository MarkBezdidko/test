var block = null;
var ie = 0;
var op = 0;
var ff = 0;
var delta_x = 0;
var delta_y = 0;
var browser = navigator.userAgent;

$(document).ready(function() {
	externalLinks();
	
	if (browser.indexOf("Opera") != -1) op = 1;
	else {
		if (browser.indexOf("MSIE") != -1) ie = 1;
		else {
			if (browser.indexOf("Firefox") != -1) ff = 1;
		}
	}
	block = document.getElementById("window");
	document.onmouseup = clearXY;
	
	$(".lesson > img").bind("click", function(event) {
		var nodes = $(event.target).siblings();
		var href = nodes.get(1).href;
		var id = href.substring(href.lastIndexOf("Lesson_") + 6, href.lastIndexOf("/"));
		var html = $("#ex" + id).html();
		$("#window ol").remove();
		$("#window p").remove();
		$("#window").html($("#window").html() + html);
		$("#window").fadeIn(500);
	});
	$(document).on("click", "#window span", function() {
		$("#window").fadeOut(500);
	});
	$(document).on("mousedown", "#drag", saveXY);
});





(function progress (e) {
  let processBar = document.querySelector(".progress__bar"),
      width = 10;
  setProgress = setInterval(progressBar, 100);
  
  function progressBar() {
    if (width >= 80
      ) {
        clearInterval(setProgress);
        } else {
          width += 1;
          processBar.style.width = width + "%";
          processBar.textContent = width + " %";
        }
  }
}());
