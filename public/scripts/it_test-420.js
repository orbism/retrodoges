//iterative
var angle = 0;
var mandelPoints = [];

function setup() {
  var myCanvas = createCanvas(1500, 1500, WEBGL);
  myCanvas.parent("p5js");
  
  const maxIterations = 333;
  const order = 8.33; //increment++
  const inc = 0.05;
  const bail = 32;
  for (let z0 = -1; z0 <= 1; z0 += inc) {
    for (let x0 = -1; x0 <= 1; x0 += inc) {
      let first = true;
      let last = false;
      for (let y0 = -1; y0 <= 1; y0 += inc) {
        let x = x0;
        let y = y0;
        let z = z0;
        let iteration = 0;
        while (true) {
          let xx = x * x;
          let yy = y * y;
          let zz = z * z;
          let xy = x * y;
          let yz = y * z;
          let zx = z * x;
          let r = sqrt(xx + yy + zz);
          let r2 = sqrt(x + y + z);
          let r3 = sqrt(xy + yz + zx);
          let theta = atan2(sqrt(xx + yy), z);
          let phi = atan2(y, x);
          let powr = pow(r, order);
          let lowpowr = pow(r2, order);
          let hipowr = pow(r3, order);
          let sinThetaOrder = sin(theta * order);
          let cosThetaOrder = cos(theta * order);
                    
          //ribbon multiplier
          x = sin(r * sinThetaOrder);
          y = r * 0.00666;
          z = tan(r * sinThetaOrder);
          
          x += x0;
          y += y0;
          z += z0;
          iteration++;
          const p = new createVector(z0, x0, y0);
          if (iteration > maxIterations) {
            if (first) {
              mandelPoints.push(p);
              first = false;
              last = true;
            }
            break;
          }
          if (xx + yy + zz > bail) {
            if (last) {
              mandelPoints.push(p);
              last = false;
              first = true;
            }

            break;
          }
        }
      }
    }
  }
  for (let v of mandelPoints) {
    v.mult(650);
  }
}

function draw() {
  background(0);
  
  angleMode(DEGREES);
  angle = angle + 1;
  
  translate(0,0,-750);
  
  for (let v of mandelPoints) {
    colorMode(HSB);
    push();
    rotateX(angle);
    rotateY(angle);
    //rotateZ(angle);
    translate(v.x, v.y, v.z);
    ambientMaterial(250);
    stroke(210 + random(60), 60 + random(40), 100);
    strokeWeight(1);
    sphere(5,5);
    pop();
  }
}
