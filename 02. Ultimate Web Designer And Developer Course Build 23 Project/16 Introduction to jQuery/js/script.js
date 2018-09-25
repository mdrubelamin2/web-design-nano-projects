/* -------------------------------------- */
// jQuery Syntax
/* -------------------------------------- */

$(function(){

	$('button').click(function(){
		$('#box').fadeOut(1000);
	});

/* -------------------------------------- */
// jQuery Selectors
/* -------------------------------------- */

	//$('h2,h3,h4').css('border', 'solid 1px red');
	$('div#container').css('border', 'solid 1px red');
	$('p.lead').css('border', 'solid 1px red');
	$('li:first').css('border', 'solid 1px red');
	$('p:even').css('border', 'solid 1px red');
	$('div em').css('border', 'solid 1px red');
	$('div > p').css('border', 'solid 1px red');
	//$(':header').css('border', 'solid 1px red');
	$('div:contains("Rubel")').css('border', 'solid 1px red');

/* -------------------------------------- */
// jQuery Event Methods
/* -------------------------------------- */

	$('#box').click(function(){
		alert('you just clicked the box');
	});

	$("input").blur(function(){

		if( $(this).val() == "" ){
			$(this).css('border', 'solid 1px red');
			$('#box').text('Forgot to add text?');
		}
	});

	$("input").keydown(function(){
		if($(this).val() !== ""){
			$(this).css('border', 'solid 1px #777');
			$('#box').text("Thanks for that!");
		}
	});

	$('#box').hover(function(){
		$(this).text('you hovered in!');
	}, function(){
		$(this).text('you hovered out!');
	});


});