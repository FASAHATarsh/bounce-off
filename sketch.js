var fixed_rect,moving_rect;

function setup() {
  createCanvas(1200,800);
 fixed_rect = createSprite(400, 100, 50, 80);
 moving_rect = createSprite(400, 800, 80, 50);
fixed_rect.shapeColor="green";
moving_rect.shapeColor="green";
moving_rect.velocityY=-5;
fixed_rect.velocityY=5;

}

function draw() {
  background(255,255,255);
 // moving_rect.x=World.mouseX;
  //moving_rect.y=World.mouseY;
   
  if (moving_rect.x-fixed_rect.x<moving_rect.width/2+fixed_rect.width/2
    &&fixed_rect.x-moving_rect.x<moving_rect.width/2+fixed_rect.width/2)
    {
      moving_rect.velocityX=moving_rect.velocityX*(-1);
      fixed_rect.velocityX=fixed_rect.velocityX*(-1);
    
    }
    if(moving_rect.y-fixed_rect.y<moving_rect.height/2+fixed_rect.height/2
    &&fixed_rect.y-moving_rect.y<moving_rect.height/2+fixed_rect.height/2)
     {
      moving_rect.velocityY=moving_rect.velocityY*(-1);
      fixed_rect.velocityY=fixed_rect.velocityY*(-1);
  }
  
  drawSprites();
}