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
