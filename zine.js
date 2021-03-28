$(".couv").fadeOut(2000);
$(".edito").click(function(){
	$(".edito").fadeOut(2000);
});
//zoom
function myFunction() {
var x = document.getElementsByClassName("scroller");
var i;
for (i = 0; i < x.length; i++) {
x[i].style.zoom = "200%";
}
}
function myFunction2() {
var x = document.getElementsByClassName("scroller");
var i;
for (i = 0; i < x.length; i++) {
x[i].style.zoom = "20%";
}
}
function myFunction3() {
var x = document.getElementsByClassName("scroller");
var i;
for (i = 0; i < x.length; i++) {
x[i].style.zoom = "100%";
}
}
//Magie menu
var clicks = 0;
$(".burger").click(function(){
	if(clicks==0){
		$(".menu-artistes").animate({
			height:"100vh"
		},500, function(){});
		$(".bookmarks").slideToggle( "slow", function() {});
	clicks = 1;}
	else if (clicks==1){
	$(".menu-artistes").animate({
		height:"50px"
	},500, function(){});
	$(".bookmarks").slideToggle( "slow", function() {});
	clicks = 0;}
	else{
		$(".ours").toggle(500,function(){});
		$(".bookmarks").slideToggle( "slow", function() {});
		clicks = 1;
	}
});
//click qui ferme auto
$(".jumpto").click(function(){$(".menu-artistes").animate({
	height:"50px"},500, function(){});
	$(".bookmarks").slideToggle( "slow", function() {});
	clicks = 0;
});
//click ours
$(".lien-ours").click(function(){
	$(".bookmarks").toggle(500,function(){});
	$(".ours").toggle(500,function(){});
	clicks=2;
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
