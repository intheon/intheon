$(document).ready(function(){

	var pages = {
		home: {
			id: "#home",
			initial: true,
			summary: "I code stuff... websites, apps, servers, your fridge, time machines.",
			content: "<img src='../intheon/index/img/bear.png' width='90px'><div class='greeting-big'>Hi!</div> I'm Ben - I specialise in front end web development and most things computer.<br /> Hit up my portfolio page to see the sort of stuff I can do. If you need something fixing, or potentially even breaking I think I can do you proud.", 
		},
		portfolio: {
			id: "#portfolio",
			initial: false,
			summary: "Stuff I'm proud off",
			content: "I've recently put this site together, so there will be a lot of stuff that's just too old (or I've forgotten about) to post here. Here's some of my most recent work.", 
		},
		about: {
			id: "#about",
			initial: false,
			summary: "a/s/l",
			content: "I was born and raised in the land of pies and thick accents, in Lancashire, North-West England. I've recently moved down to London and it's been a bit of a change to say the least. I skateboard anything that looks remotely rideable, and can make a mean cup o' tea. I've been interested in tech for years, and if I see something interesting will try and build a version of it from scratch. I've spent the majority of my career to date working at a digital publishers, and this has given me some pretty comprehensive business experience. I now want to go back to my main passion in IT, and that's creating stuff from scratch!", 
		},
		contact: {
			id: "#contact",
			inital: false,
			summary: "You can't beat a good hand-written email!",
			content: "I freelance and would love to hear about any project you are working on, as I can offer consultancy advise, design, and coding abilities also! (the full package!) -- I'd also love to hear from you about anything else! (Such as free gig tickets!)", 
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
