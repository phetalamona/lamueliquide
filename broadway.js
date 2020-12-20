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

function divMaker(w,h,x,y,d){
	//permet de créer une div
	var newDiv = document.createElement("div");
	newDiv.style.position = "fixed";
	newDiv.style.background = "var(--violet)";
	newDiv.style.width = w+"px";
	newDiv.style.height = h+"px";
	newDiv.style.top = x+"px";
	newDiv.style.left=  y+"px";
	newDiv.className = "temp";
	newDiv.innerHTML= d;
	newDiv.style.color = "var(--ivoire)";
	newDiv.style.fontSize = "30pt";
	newDiv.style.textAlign = "center";
	newDiv.style.fontFamily="'Redaction 50'";
	newDiv.style.paddingTop = ((44*h)/100)+"px";
	newDiv.style.paddingLeft = ((1*w)/100)+"px";
	console.log("hihi");
	document.querySelector(".scroller").appendChild(newDiv);
}

$(".image,.pjs").click(function(){
		var idimage = $(this).attr('id');
		console.log(idimage);
		var width = this.width;
		var height = this.height;
		var top = this.offsetTop;
		var left = this.offsetLeft;
		var metadata = this.dataset.meta;
		console.log(width);
		console.log(height);
		console.log(top);
		console.log(left);
	  divMaker(width,height,top,left,metadata);
		$(".temp").fadeOut(6000);
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

//P5JS
var a =['▓','▒','░',' '];let t = 0;let c=25;let h=c*c;
function setup(){var cnv=createCanvas(500,500);cnv.parent("holder");frameRate(30);}
function draw(){background(252, 252, 237,60);for(i=0;i<c;i++){for(j=0;j<c;j++){
let nanana = int(sin(sqrt(t)*j+sin(i))*-4);let finale;fill(142, 0, 255);textSize(20);if(nanana<0){finale=-nanana;}else{finale=nanana;}if(finale>3){finale=3;}text(a[finale],i*c,j*c);}}t+=1;}
