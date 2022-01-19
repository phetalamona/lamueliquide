
const s2 = ( sketch ) => {

var anim;
let uniformsShader;
let post;
let alt;
let div;
let varying = 1;
let varying2;
let first = false;


sketch.preload = function() {
  uniformsShader = sketch.loadShader('assets_gazeux/contrib_lamue_drice_v2/a.vert', 'assets_gazeux/contrib_lamue_drice_v2/a.frag');
  //post = loadShader('hmhm.vert', 'hmhm.frag');

};
sketch.setup = function()  {
  let cnv = sketch.createCanvas(500, 500);
  anim = sketch.createGraphics(500, 500,this.WEBGL);
  inter = sketch.createGraphics(500,500)
  sketch.background(3,246,105);

};

sketch.draw = function() {
  let col1 = sketch.color('#B5B5B5')
let col2 = sketch.color('#03F669')
  anim.noStroke();
  anim.shader(uniformsShader);
// lets just send frameCount to the shader as a way to control animation over time
  uniformsShader.setUniform('time', sketch.frameCount);
  uniformsShader.setUniform("var1", sketch.float(varying));
  uniformsShader.setUniform('alt', alt);
  uniformsShader.setUniform('iResolution', [sketch.width,sketch.height])
  varying2 = sketch.map(varying, 0, 20090,0.0,1.0);
  uniformsShader.setUniform("var2", sketch.float(varying2));
  //anim.shader(post);
  //anim.rect(0,0,width, height);
// rect gives us some geometry on the screen
  anim.rect(0,0,sketch.width, sketch.height);
    //inter.background(224,254,220)

 /* for(x=0;x<width;x++){
     for(y=0;y<height;y++){
       if(lightness(l)<50){
     inter.set(i,j,col1)
   }
   else{
     inter.set(i,j,col2)
   }
     }
   }*/
  //filter(POSTERIZE,2);
  //image(anim,0,0);
   //inter.filter(DILATE)

// inter.filter(GRAY);
  sketch.image(anim,0,0,500,500);
  //blend(inter,0,0,200,200,0,0,500,500,DODGE)
//inter.filter(POSTERIZE,4)
  //filter(GRAY)
  //tint(20,220,20)

};
};
new p5(s2, "holderdrice");
