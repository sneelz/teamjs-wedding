// home smooth transitions
$(document).ready(function() {
    $("#timeline1").hide().fadeIn(1000);
    $("#timeline2").hide().fadeIn(2000);
    $("#timeline3").hide().fadeIn(3000);
});

$('.js-slide-text').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+900) {
        $(this).addClass("js-slide-down");
    }
});

$(window).scroll(function() {	
	$('.js-about-text').each(function(){
	    var imagePos = $(this).offset().top;

	    var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+900) {
			$(this).addClass("js-slide-down");
		}
    });
});