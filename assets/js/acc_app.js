$(document).ready(function(){
	$(".panel-trigger").click(function(e){
		e.preventDefault();
		// this panel trigger
		var self = $(this);
		// panel content wrapper
		var next = self.next();
		// rest of panel contents
		var restOfContents = $(this).parents('#acc-panels-wrapper').find("div.acc-inner-content");
		// open the content block that relate to the current trigger
		if(next.css("display") == "none"){
			restOfContents.slideUp('medium');
			next.slideDown("medium");
		} else {
			restOfContents.slideUp('medium');
			next.slideUp("medium");			
		}
	});
});