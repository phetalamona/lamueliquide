let t =0;
let p;
function setup() {
var cnv=createCanvas(600,600);cnv.parent("holder");  p = createGraphics(600,600,WEBGL)
  frameRate(30);
}

function draw() {
//background(233,243,245,10);
  if(frameCount%1==0){p.background(233,243,245,60);}
  for(i=0;i<40;i+=10){
  push();
  p.rotateX(radians(460));
  p.rotateZ(radians(map(t+noise(t,20),0,width,0,460)));
  p.rotateY(radians(map(sin(t)*30,0,width,0,560)));

  p.noFill();
  p.stroke(5,11,227,i+t*3);
  let a =(width^noise(t)&0)/2;
  p.box(80+i,a);
  pop();
  }
  image(p,0,0);
  t+=0.005;
}
