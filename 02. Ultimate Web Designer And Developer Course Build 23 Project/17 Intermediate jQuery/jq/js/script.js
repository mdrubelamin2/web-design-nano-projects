$(function(){

/* -------------------------------------- */
// jQuery Chaining
/* -------------------------------------- */

	$('.notification-bar').delay(2000).slideDown().delay(3000).fadeOut();

/* -------------------------------------- */
// jQuery Hiding & Showing
/* -------------------------------------- */

	// $('h1').hide();
	// $('div.hidden').show();

	// $('div.hidden').fadeIn(8000);

	$('#box1').click(function(){
		$(this).fadeTo(1000, 0.25, function(){
			// animation is complete

			$(this).slideUp();

		});
	});

	$('div.hidden').slideDown();

	$('button').click(function(){
		$('#box1').slideToggle();
	});

/* -------------------------------------- */
// jQuery Animate
/* -------------------------------------- */
	
	$('#left').click(function(){
		$('.box').animate({
			left: "-=40px",
			fontSize: "+=2px"
		}, function(){
			// animation is complete
		});

	});

	$('#up').click(function(){
		$('.box').animate({
			top: "-=40px",
			opacity: "+=0.1"
		}, function(){
			// animation is complete
		});

	});

	$('#right').click(function(){
		$('.box').animate({
			left: "+=40px",
			fontSize: "-=2px"
		}, function(){
			// animation is complete
		});

	});

	$('#down').click(function(){
		$('.box').animate({
			top: "+=40px",
			opacity: "-=0.1"
		}, function(){
			// animation is complete
		});

	});

/* -------------------------------------- */
// jQuery CSS
/* -------------------------------------- */

	$('#circle2').css({ 'background': '#8a8d22',
	'display': 'inline-block',
	'color': 'white', 
	'text-align': 'center', 
	'line-height': '140px', 
	'height': '140px', 
	'width': '140px', 
	'margin': '140px'
	}).addClass('circleShape');


// end of main function
});