// in this example we use a time uniform to drive an animation with a few of glsl's built in math functions
// you can find more info for GLSL functions online
// i like this page http://www.shaderific.com/glsl-functions/

precision mediump float;

// lets grab texcoords just for fun
varying vec2 vTexCoord;
uniform vec2 iResolution;

// our time uniform variable coming from p5
uniform float time;
uniform float var1;
uniform float var2;
uniform float alt;
// Simplex 2D noise
//
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}
void main() {

  vec2 uv = gl_FragCoord.xy/iResolution;
    vec2 uvb = (gl_FragCoord.xy/iResolution)+snoise(uv);
  
  float speed = 0.06;
  float slowTime = time * speed;

  //const vec4 green_bg = vec4(0.878,0.996,0.863) ;
     // const vec4 white = vec4(1.0,1.0,1.0;1.0) ;

  vec3 col =  0.5+snoise(uv*1.0+slowTime*0.1)*snoise(uv)*0.5*sin(slowTime+uvb.xyx+vec3(1,2,4));
  vec4 color = vec4(col,1.0);

  gl_FragColor = color;
  
}