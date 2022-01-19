
const s = ( sketch ) => {
let bg;
let vert;
let clair;
// this class describes the properties of a single particle.
class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = sketch.random(0,sketch.width);
    this.y = sketch.random(0,sketch.height);
    this.r = sketch.random(1,5);
    this.xSpeed = sketch.random(0,1);
    this.ySpeed = sketch.random(0,1);
  }

// creation of a particle.
  createParticle() {
    bg = sketch.color('#B5B5B5');
  clair = sketch.color('#03F669');
  vert = sketch.color('#E0FEDC');
    sketch.noStroke();
    sketch.fill(vert);
    sketch.circle(this.x,this.y,this.r);
  }

// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > sketch.width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > sketch.height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }


}

// an array to add multiple particles
let particles = [];

sketch.setup = function()  {
  var cnvphi=sketch.createCanvas(720, 400);
  for(let i = 0;i<cnvphi.width/10;i++){
    particles.push(new Particle());
  }
};

sketch.draw = function() {
  bg = sketch.color('#B5B5B5');
  clair = sketch.color('#03F669');
  vert = sketch.color('#E0FEDC');
  sketch.background(clair);
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();

  }
};
};
new p5(s,"holderphili");
