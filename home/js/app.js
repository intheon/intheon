$(document).ready(function(){
	render();
});

function render()
{
	//---------------------//
	//  flashy underscore
	setInterval(function(){
		$("#flash").show();
		setTimeout(function(){
			$("#flash").hide();
		},500);
	}, 1225);
	//---------------------//
}