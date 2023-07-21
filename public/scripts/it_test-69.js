/* iterative */
var angle = 0;
var r;

function setup(){
  var myCanvas = createCanvas(1500, 1500, WEBGL);
  myCanvas.parent("p5js");

  angleMode(DEGREES);
  r = width/6;
  
    itx = log(0.03);
    ity = 26; 
    itz = 3;

  pixelDensity(1);
}

function draw(){
  clear();
  colorMode(HSB);
  push();
  background(0,0,0);
  strokeWeight(3);
  noFill();

  stroke(30, 100, 100);
  
  angleMode(DEGREES);
  angle = angle + 1;
  
  rotateX(45);
  rotateY(angle);
  rotateZ(angle);
    
  beginShape(POINTS);
  for(let theta = 0; theta < 180; theta += 2){
    for(let phi = 0; phi < 360; phi += 2){
      let y = r*(4+itx*sin(itz*theta)*sin(ity*phi)) * sin(1*theta) * cos(phi);
      let z = r*(4+itx*sin(itz*theta)*sin(ity*phi)) * sin(1*theta) * sin(phi);
      let x = r*(4+itx*sin(itz*theta)*sin(ity*phi)) * cos(1*theta);
      vertex(x, y, z); //y for onion position
    }
  }
  endShape();
}
