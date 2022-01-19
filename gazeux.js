
let bg;
let vert;
let clair;
// this class describes the properties of a single particle.
class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,5);
    this.xSpeed = random(0,1);
    this.ySpeed = random(0,1);
  }

// creation of a particle.
  createParticle() {
    bg = color('#B5B5B5');
  vert = color('#03F669');
  clair = color('#E0FEDC');
    noStroke();
    fill(vert);
    circle(this.x,this.y,this.r);
  }

// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }


}

// an array to add multiple particles
let particles = [];

function setup() {
  var cnvphi=createCanvas(720, 400);cnv.parent("holderphili");
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
}

function draw() {
  bg = color('#B5B5B5');
  vert = color('#03F669');
  clair = color('#E0FEDC');
  background(clair);
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();

  }
}
