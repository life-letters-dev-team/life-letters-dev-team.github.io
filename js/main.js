
jQuery(document).ready(function() {

	if ( $(".bg-letter").length )
		var s = skrollr.init({ forceHeight: false });

	$('[data-parallax-port]').mousemove(function(e) {
		var $port = $(this),
			offset = $(this).offset(),
			xPos = e.pageX - offset.left,
			yPos = e.pageY - offset.top;

		/* Get percentage positions */
		var mouseXPercent = xPos * 1.0 / $port.width() - 0.5;
		var mouseYPercent = yPos * 1.0 / $port.height() - 0.5;

		/* Position Each Layer */
		$('[data-parallax]').each(function() {
			var $el = $(this),
				drift = $el.data('parallax');

			// remember the original position
			if ( !$el.data('_pos') )
				$el.data('_pos', $el.position() );

			var myX = drift * mouseXPercent + $el.data('_pos').left,
				myY = drift * mouseYPercent + $el.data('_pos').top;

			var cssObj = {left: myX+'px', top: myY+'px'};
			$(this).animate({left: myX, top: myY}, {duration: 0, queue: false, easing: 'linear'});
		});
	});

	// Validate the subscribe form
	$('form').validate();

	// // Ensure the more link is always at the bottom
	// $("body").scroll(function(e) {
	// 	var $more = $("#scroll-down");
	// });

	// Make anchor links scroll rather than jump
	$("a").each(function() {
		var $this = $(this);
		if ( $this.attr('href').match(/^#/) ) {
			var name = $this.attr('href').replace(/^#/, ''),
				$target = $('[name="'+name+'"]');

			$this.attr('href', '#').click(function() {
				$(document.body).animate({
				    'scrollTop': $target.offset().top
				}, 500);
			});
		}
	})
});
