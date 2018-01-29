$(document).ready(function () {

	$(window).resize(function(){
		console.log($(window).width());
		if ($(window).width() > '875') {
			$('#mobile-nav').hide();
		}
	})
	// console.log($(window).width());


$('#burger').click(function(){
	$('#mobile-nav').slideToggle();
})

})
