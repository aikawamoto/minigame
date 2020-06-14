// This is a JavaScript file
  var x,y;
  var speed;
  var a;

function setup() { 
  createCanvas(windowWidth,windowHeight);
  x=width;
  y=height/2.0;
  speed=2.0;
  a=90;
  }

function draw() { 
  background(204);
  if (mouseIsPressed) { 
    fill(0);
    } else { 
      fill(255);
    } 

    ellipse(mouseX, mouseY, 30, 30);
    

    x=x-speed;
    if(x<-width){
      x=width;
      y=random(width-a);
    }
    translate(x,y);
    rect(0,0,a,a);
}

