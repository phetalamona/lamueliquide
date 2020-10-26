$(".couv").fadeOut(2000);
$(".edito").click(function(){
	$(".edito").fadeOut(2000);
});
var clicks = 0;
$(".burger").click(function(){
	if(clicks==0){
		$(".menu-artistes").animate({
			height:"100vh"
		},500, function(){});
		$(".bookmarks").slideToggle( "slow", function() {});
	clicks = 1;}
	else{
	$(".menu-artistes").animate({
		height:"50px"
	},500, function(){});
	$(".bookmarks").slideToggle( "slow", function() {});
	clicks = 0;}
});
//J'ai rien touché à part le startX et startY, il faudra peut être bidouiller
//pour faire des zooms ou pour arranger ça pr tel!
var myScroll;

function loaded () {
	myScroll = new IScroll('.wrapper', {
		startX: 100,
		startY: 200,
		scrollY: true,
		scrollX: true,
		freeScroll: true,
		mouseWheel: true,
	});
}


// 	capture: false,
// 	passive: false
// } : false);
