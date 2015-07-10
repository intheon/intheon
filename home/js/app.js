$(document).ready(function(){

	var pages = {
		home: {
			id: "#home",
			initial: true,
			summary: "this is the homepage"
		},
		portfolio: {
			id: "#portfolio",
			initial: false,
			summary: "welcome to the portfolio"
		},
		about: {
			id: "#about",
			initial: false,
			summary: "i live in a cake"
		},
		contact: {
			id: "#contact",
			inital: false,
			summary: "invite me to your party. now"
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

		$(".nav_item a").css("text-decoration","none");
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
		$("." + keys).html(pages[keys].summary);
	}

}
