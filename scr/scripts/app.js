$(document).ready(function () {
    // alert("I'm Working");
 $(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('change');
    }
    else {
    $('#nav').removeClass('change');
    }
  });
  });
