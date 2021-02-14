let w = 400;
let h = 400;
let x = 200;
let g = 9.81;
let time = 0;
let ch = 200;
let r = 25;
let animationstill = false;
let i = 0;

function setup() {
  createCanvas(w, h);
  frameRate(60);
}

function draw() {
  if(((keyIsDown(32)) && (ch >= h - r - 1)) || animationstill){
      animationstill = true;
      i+=3;
      ch -= g * (deltaTime/1000) * 55
      if(i>=20){
        
        i=0;
        animationstill = false;
      }
      
  }else 
  {
    ch += g * (deltaTime/1000) * 20
  }
  
  
  if(ch >= h-r){
    ch = h-r;
  }
  if(x <= 0 + r){
     x = r;
  }
  if(x >= w - r){
     x = w - r;
  }
  
  background(215);
  circle(x,ch,2*r);
  
  if (keyIsDown(LEFT_ARROW)){
    x-=3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    x+=3;
  }
  
  
  
}