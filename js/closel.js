jQuery(function($){
	$(document).mouseup(function (e){ 
		var hider = $("#dch");
		var summoner =$("#per");
		if (!summoner.is(e.target)
		    && summoner.has(e.target).length === 0) {
			$('.datechaker').attr('class','hide');
		}
	});
});
