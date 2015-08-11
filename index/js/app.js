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
			content: "<div class='showcase-container'>Take a look at some of my recent work!\
						<div class='showcase-item'>\
							<div class='showcase-item-header'>Twitter mood detector</div>\
							<div class='showcase-item-description'>Enter any phrase, or hashtag, and it will query the Twitter API for all results, then cram the resulting array through the <a href='http://www.alchemyapi.com/api/sentiment-analysis' target='_blank'>Sentimental API</a>.<br />The result is then presented in a pretty fashion whether the owner of that Tweet is Happy, Sad, or Indifferent.</div>\
							<div class='showcase-item-url'><a href='http://intheon.uk/twitter' target='_blank'>http://intheon.uk/twitter</a></div>\
							<div class='showcase-item-skills'><h2>Technology and skills demonstrated:</h2> HTML, CSS, JS, jQuery, Twitter API, Sentimental API, PHP, Photoshop.</div>\
						</div>\
						<div class='showcase-item'>\
							<div class='showcase-item-header'>Personalised Dashboard</div>\
							<div class='showcase-item-description'>I was pretty gutted when iGoogle was dismissed, coupled with the fact I'm pretty unorganised there's a definite need for me to have this set as my homepage. It is all handwritten to feature a todo list, dynamic feeds, a calendar of spending (so i can budget), and my emails all displayed.</div>\
							<div class='showcase-item-url'><a href='http://intheon.uk/home' target='_blank'>http://intheon.uk/home</a></div>\
							<div class='showcase-item-skills'><h2>Technology and skills demonstrated:</h2> HTML, CSS, Semantic UI, JS, jQuery, JSON, PHP, Gmail API</div>\
						</div>\
						<div class='showcase-item'>\
							<div class='showcase-item-header'>Ed Hall Recording</div>\
							<div class='showcase-item-description'>My first official project - A long time friend of mine runs his own recording studio business and needed a new mobile friendly site with his Soundcloud and Instagram pages pulling in.</div>\
							<div class='showcase-item-url'><a href='http://intheon.uk/ed' target='_blank'>http://intheon.uk/ed</a></div>\
							<div class='showcase-item-skills'><h2>Technology and skills demonstrated:</h2> HTML, CSS, Semantic UI, JS, jQuery</div>\
						</div>\
			</div>", 
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
			content: "<h2>Get in contact</h2><form id='contact-form'>\
				<input class='input-transition' type='text' id='contact-form-input-name' placeholder='Name'>\
				<input class='input-transition' type='text' id='contact-form-input-email' placeholder='Email'>\
				<input class='input-transition' type='text' id='contact-form-input-comments' placeholder='Comments'>\
			</form>", 
		}
	}
	initialiseDragend(pages);
});

function initialiseDragend(pages)
{
	var lastKnown = 0;
	$(".content").dragend({
		onSwipeStart: function(){
			console.log("during" + lastKnown);
			var target =  parseInt(this.page + 1);
			$(".nav_item a:not([data-page='"+target+"'])").removeClass("active_nav_item");
			$("[data-page='"+target+"']").addClass("active_nav_item");
		},
		onSwipeEnd: function(){
			lastKnown = this.page;
			console.log("end" + lastKnown);
		},
		afterInitialize: function(){
			this.container.style.visibility = "visible";
		},
	});

	$(".nav_item a").click(function(event){
		var page = parseInt(event.target.dataset.page);
			page = page;

        $(".content").dragend({
			onSwipeEnd: function(){
			$(".nav_item a:not([data-page='"+page+"'])").removeAttr("class");
			$("[data-page='"+page+"']").addClass("active_nav_item");
		},
          scrollToPage: page + 1
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
