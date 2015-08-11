$(document).ready(function(){

	var pages = {
		home: {
			id: "#home",
			initial: true,
			summary: "I code stuff... websites, apps, servers, your fridge, time machines.",
			content: "<img src='../intheon/index/img/bear.png' width='90px'><div class='greeting-big'>Hello!</div> I'm Ben, front end developer at your service. I'm good at listening to a requirement, and following through to get results on a project. <br /> Be it your launching your own start-up, professional agency, or want to give your brand an identity that you can be proud of, I think I can help. <br /> <br /> I've worked with SO many businesses and individuals alike so understand that each project should be treated uniquely. Take a look at my portfolio for a little insight to my work.", 
		},
		portfolio: {
			id: "#portfolio",
			initial: false,
			summary: "Stuff I'm proud off",
			content: "<div class='showcase-container'><h2>Recent Work</h2>\
						<table class='ui table subtle'>\
							<tbody>\
								<tr>\
									<td>Name</td>\
									<td>Twitter mood detector</td>\
								</tr>\
								<tr>\
									<td>Description</td>\
									<td>Enter any phrase or hashtag, and it will query the Twitter API for all results, then cram the resulting array through the <a href='http://www.alchemyapi.com/api/sentiment-analysis' target='_blank'>Sentimental API</a>.<br />The result is then presented in a pretty fashion whether the owner of that Tweet is Happy, Sad, or Indifferent.</td>\
								</tr>\
								<tr>\
									<td>Skills required</td>\
									<td>HTML, CSS, JS, jQuery, Twitter API, Sentimental API, PHP, Photoshop.</td>\
								</tr>\
								<tr>\
									<td>URL</td>\
									<td><a href='http://intheon.uk/twitter' target='_blank'>intheon.uk/twitter</a></td>\
								</tr>\
							</tbody>\
						</table>\
						<table class='ui table subtle'>\
							<tbody>\
								<tr>\
									<td>Name</td>\
									<td>Personalised Dashboard</td>\
								</tr>\
								<tr>\
									<td>Description</td>\
									<td>I was pretty gutted when iGoogle was discontinued, coupled with the fact I'm pretty unorganised there's a definite need for me to have this set as my homepage. It is all handwritten to feature a todo list, dynamic feeds, a calendar of spending (so i can budget), and my emails all displayed.</td>\
								</tr>\
								<tr>\
									<td>Skills required</td>\
									<td>HTML, CSS, Semantic UI, JS, jQuery, JSON, PHP, Gmail API</td>\
								</tr>\
								<tr>\
									<td>URL</td>\
									<td><a href='http://intheon.uk/home<' target='_blank'>intheon.uk/home</a></td>\
								</tr>\
							</tbody>\
						</table>\
						<table class='ui table subtle'>\
							<tbody>\
								<tr>\
									<td>Name</td>\
									<td>Ed Hall Recording</td>\
								</tr>\
								<tr>\
									<td>Description</td>\
									<td>My first official project - A long time friend of mine runs his own recording studio business and needed a new mobile friendly site with his Soundcloud and Instagram pages pulling in.</td>\
								</tr>\
								<tr>\
									<td>Skills required</td>\
									<td>HTML, CSS, Semantic UI, JS, jQuery</td>\
								</tr>\
								<tr>\
									<td>URL</td>\
									<td><a href='http://intheon.uk/ed' target='_blank'>intheon.uk/ed</a></td>\
								</tr>\
							</tbody>\
						</table>\
						<table class='ui table subtle'>\
							<tbody>\
								<tr>\
									<td>Name</td>\
									<td>Ed Hall Recording</td>\
								</tr>\
								<tr>\
									<td>Description</td>\
									<td>My first official project - A long time friend of mine runs his own recording studio business and needed a new mobile friendly site with his Soundcloud and Instagram pages pulling in.</td>\
								</tr>\
								<tr>\
									<td>Skills required</td>\
									<td>HTML, CSS, Semantic UI, JS, jQuery</td>\
								</tr>\
								<tr>\
									<td>URL</td>\
									<td><a href='http://intheon.uk/ed' target='_blank'>intheon.uk/ed</a></td>\
								</tr>\
							</tbody>\
						</table>\
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
		$("." + keys).html("<div class='panel-area'><div class='panel-content'>" + pages[keys].content + "</div>");
	}

}
