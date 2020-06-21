var y = 600;
var ex,espeed,ey;
var score=0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  ex = (random(width));
  espeed = (random(1,6));
  ey = -10;
  
}
function draw(){
  background(255);
  noStroke();
  ell();
  scorep();
  
}

function ell(){
   fill(255,10,255);
   rect(mouseX,y,60,20,5);
   if(dist(mouseX,y,ex,ey)<30){
    ey =-10;
    ex = (random(width));  //追加しました
    espeed = (random(1,6)); //追加しました
    score+=10;
  }
   else if(ey-20 > height){
    ey =-10;
    ex = (random(width));  //追加しました
    espeed = (random(1,6)); //追加しました
   }
  fill(10,255,10);
  ellipse(ex,ey,20,20);
  ey += espeed;

}

function scorep(){
  textSize(24);
  fill(200);
  text("score:"+score,10,20);

}

