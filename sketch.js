var fixedRect,movingRect,object;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object = createSprite(200,200,50,80)
  object.shapeColor = "blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,object)){
movingRect.shapeColor = "red"
object.shapeColor = "red"
}
else{
  object.shapeColor="blue"
  movingRect.shapeColor="green"
}
  
  drawSprites();
}
