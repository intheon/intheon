$(document).ready(function(){

	var pages = {
		home: {
			id: "#home",
			initial: true,
			summary: "i code stuff",
			content: "websites, apps, servers, your fridge, time machines. I've been doing this for years and intend to carry on.", 
		},
		portfolio: {
			id: "#portfolio",
			initial: false,
			summary: "welcome to the portfolio",
			content: "here some of the stuff ive remembered, or not too ashamed of showing off", 
		},
		about: {
			id: "#about",
			initial: false,
			summary: "a/s/l",
			content: "born up north, lives down south, skates everything that resembles concrete, impeccible manners", 
		},
		contact: {
			id: "#contact",
			inital: false,
			summary: "got free tickets to a vip event?",
			content: "get in contact via allobon@gmail.com or the form below", 
		}
	}
	initialiseDragend(pages);
});

function initialiseDragend(pages)
{
	var firstChild = $(".content div:first-child").clone()
	var lastChild  = $(".content div:last-child").clone()
	var container  = $(".content");

	firstChild.appendTo(container);
	lastChild.prependTo(container);

	$(".content").dragend({
		jumpToPage: 2,
		onSwipeEnd: function(){

			var target =  parseInt(this.page + 1);

			$(".nav_item a:not([data-page='"+target+"'])").removeClass("active_nav_item");
			$("[data-page='"+target+"']").addClass("active_nav_item");

			var first 		= this.pages[0]
			var last 		= this.pages[this.pages.length - 1];

			if (first === this.activeElement)
			{
				this.jumpToPage(this.pages.length - 1 );
			}

			if (last === this.activeElement) 
			{
				this.jumpToPage(2);
			}
		},
		afterInitialize: function(){
			this.container.style.visibility = "visible";
		}
	});

	$(".nav_item a").click(function(event){

		/*
		$(".nav_item a:not([data-page='"+this.page+"'])").removeClass("active_nav_item");
		$("[data-page='"+this.page+"']").addClass("active_nav_item");
		*/


		var page = event.target.dataset.page;


        $(".content").dragend({
          scrollToPage: page
        });
        
	});

	populateSlides(pages);
};

function populateSlides(pages)
{
	for (keys in pages)
	{
		$("." + keys).html("<div class='panel-area'><div class='panel-heading'>" + pages[keys].summary + "</div><div class='panel-content'>" + pages[keys].content + "</div>");
	}
}
