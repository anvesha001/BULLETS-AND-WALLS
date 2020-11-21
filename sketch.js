
var wall , thickness ;
var  bullet , speed , weight ;
var damage;
function setup() {
  createCanvas(1200,700);
 
wall = createSprite(1000 , 300,thickness , height / 2 ) ; 
  bullet = createSprite(50,200,50,50)

bullet.shapeColor = "white" ; 
wall.shapeColor = "grey" ; 

speed = random (223 , 321) ;
weight = random (30 , 52) ;
thickness = random (22 , 83);

bullet.velocityX = speed ; 
}

function draw() {
  background(0,0,0); 
  damage = 0.5 * weight * speed * speed / ( thickness * thickness * thickness );
  if(hasCollided(bullet , wall))
  {
    bullet.velocityX = 0 ;
  
  if (damage > 10 )
  {
  wall.shapeColor = "red";
  }
  if (damage < 10)
  {
    wall.shapeColor = "green";
  }
}
text("Damage ="+damage,300,100);
  drawSprites();
}
function hasCollided (lbullet,lwall)
{
 bulletRightEdge = lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x ; 

 if(bulletRightEdge>=wallLeftEdge)
 {
   return true ;
 }
 else{
return false
}
}