// Scroll resize navbar
$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("nav").removeClass("large").addClass("small");
	} else {
		$("nav").removeClass("small").addClass("large");
	}
});

// ScrollTop para os links da barra de navegação
jQuery('a').click(function(){
    jQuery('html, body').animate({
        scrollTop: jQuery( jQuery(this).attr('href') ).offset().top
    }, 500);
    return false;
}); 

// Dropdown Menu
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown

document.querySelector(".menu").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}