var r1,r2,r3,r4
function setup() {
  createCanvas(1200,800);
  r1=createSprite(600,400,50,80);
  r1.shapeColor="green";
  r1.debug=true
  r2=createSprite(400,200,80,30);
  r2.shapeColor="green";
  r2.debug=true
  r3=createSprite(100,100,50,50);
  r3.shapeColor="green";
  r3.debug=true;
  r4=createSprite(300,100,50,50);
  r4.shapeColor="green"
  r4.debug=true;
}

function draw() {
  background("black");  
  r2.x=World.mouseX
  r2.y=World.mouseY
  if(isTouching(r2,r4)){
  r2.shapeColor="yellow";
  r4.shapeColor="yellow";
  }
  else{
  r2.shapeColor="green";
  r4.shapeColor="green";
  }

  drawSprites();
}
