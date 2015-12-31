$(document).ready(function(){

	var navIcon = $('.menu-icon');
	var navUL = $('.nav').find('ul');
	var navLI = navUL.find('li');

	// toggles menu on .menu-icon click in DOM
	navIcon.on('click',function() {
		navUL.slideToggle();
	});

	//closes menu on menu li if .menu-icon is visible
	if (navIcon.css('display') === 'block') {
		
		// hides menu on page ready
		navUL.css('display','none');

		navLI.on('click', function() {
			navUL.slideUp();
			console.log('triggered');
		});
	}

	//opens menu if desktop browser viewport width grows past 900px
	$( window ).resize(function() {
  		if ($( window ).width() > 900) {
  			navUL.css('display','block');
  		}
	});
});