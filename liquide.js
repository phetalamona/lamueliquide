//P5JS
var a =['▓','▒','░',' '];let t = 0;let c=25;let h=c*c;
function setup(){var cnv=createCanvas(500,500);cnv.parent("holder");frameRate(30);}
function draw(){background(252, 252, 237,60);for(i=0;i<c;i++){for(j=0;j<c;j++){
let nanana = int(sin(sqrt(t)*j+sin(i))*-4);let finale;fill(142, 0, 255);textSize(20);if(nanana<0){finale=-nanana;}else{finale=nanana;}if(finale>3){finale=3;}text(a[finale],i*c,j*c);}}t+=1;}
