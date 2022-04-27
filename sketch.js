let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  colorMode(HSB, 360, 100, 100, 100);
   //web cam capture
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
}

function draw() {
  background(0, 100, 20, 40);
  imageMode(CENTER);
  filter(GRAY);
  tint(random(360), 100, 100);
  if (frameCount%5==0){
  image(capture, width/2, height/2);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}