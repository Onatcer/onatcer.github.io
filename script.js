$( window ).load(function() {
$(document).delay(500).queue(function(next) {
  $('header img').addClass('fadeIn animated');
  next();
})
.delay(500).queue(function(next) {
  $('header h1').addClass('fadeIn animated');
  next();
})
.delay(500).queue(function(next) {
  $('header h2').addClass('fadeIn animated');
  next();
})
.delay(800).queue(function(next) {
  $('article').addClass('fadeInUpArticle animated');
  next();
});
});

$( document ).ready(function() {
var waypoints = $('.mic').waypoint({
	offset: '50%',
  handler: function(direction) {

$(document).delay(400).queue(function(next) {
  		$.each($('.mic').children('p'), function(i, el){

	    setTimeout(function(){
	       $(el).addClass("animated fadeIn");
	    }, i * 500 );

		});
  next();
})
.delay(2000).queue(function(next) {
  		$.each($('.mic').children('img'), function(i, el){

	    setTimeout(function(){
	       $(el).addClass("animated bounceIn");
	    },i * 500);

		});
  next();
})
.delay(1500).queue(function(next) {
  		$.each($('.mic').children('span'), function(i, el){

	    setTimeout(function(){
	       $(el).addClass("animated fadeIn");
	    },i * 600);

		});
  next();
})
.delay(2000).queue(function(next) {
	$('main:nth-of-type(2) .part').addClass('animated fadeIn')
  next();
});


}
});
});