
var fixedRect, movingRect;
var gameObject1, gameObject2;
var object3;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  object3 = createSprite(200,200,80,30);
  object3.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,object3)){
    movingRect.shapeColor = "red";
    object3.shapeColor = "red";
  }

  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"

    object3.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



