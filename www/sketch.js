var y = 600;
var ex,espeed,ey;
var rx,rspeed,ry;
var time=0;
var lmtm=30;
var score=0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  ex = (random(width));
  espeed = (random(1,6));
  ey = -10;

  rx = (random(width));
  rspeed = (random(1,6));
  ry = -10;
  
}
function draw(){
  background(255);
  noStroke();
  ell();
  rec();
  tm();
  scorep();
  
}

function ell(){
   fill(255,10,255);
   rect(mouseX,y,40,40,5);
   if(dist(mouseX,y,ex,ey)<40){
    ey =-10;
    ex = (random(width));  
    espeed = (random(1,6)); 
    score+=10;
  }
   else if(ey > height){
    ey =-10;
    ex = (random(width));  
    espeed = (random(1,6)); 
   }
  fill(10,255,10);
  ellipse(ex,ey,40,40);
  ey += espeed;
}

  function rec(){
   if(dist(mouseX,y,rx,ry)<40){
    ry =-10;
    rx = (random(width));  
    rspeed = (random(1,6)); 
    score-=10;
  }
   else if(ry-20 > height){
    ry =-10;
    rx = (random(width));  
    rspeed = (random(1,6)); 
   }
  fill(255,255,10);
  rect(rx,ry,50,50);
  ry += rspeed;

}

function scorep(){
  textSize(24);
  fill(200);
  text("score:"+score,10,20);

}

function tm(){
  time += 1;

if(time%60==0){ //draw()が60で割り切れる回数呼び出された時、if文の中を実行

lmtm -= 1;
}

fill(20);

textSize(50);

text(nf(lmtm, 2), 100, 50);

if(lmtm<=0 || score<0){
  background(255,255,0);
  text("GAME OVER",45,100);
  noLoop();
}
else if(score>40){
  background(0,255,127);
  text("GAME CLEAR!!",45,100);
  noLoop();
}
}

