$(document).ready(function() {

    $('.colors').click(function(){
		//$(this).animate({"width": "-=5px", "height": "-=5px" }, "fast" ).animate({"width": "+=5px", "height": "+=5px" }, "fast" );
		$(this).animate({"width": "-=8px"}, "fast" ).animate({"width": "+=8px"}, "fast" );
	});

});

function flashElement(elementID){
		$('.colors:not(#' + elementID + ')').fadeOut(1500).fadeIn(1500);
}