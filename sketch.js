function setup() {
  createCanvas(150, 150);
  background(0);
}

function draw() {
  for(x=0;x<150;x++){
    for(y=0;y<150;y++){
      stroke(x,y,mouseX);
      point(x,y);
    }
  }
}