var car,wall;
var speed,weight,deformation

function setup() {
  createCanvas(800,400);
  
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(680, 200, 60, height/2);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;  
}
textSize = 15;

function draw() {
  background(0);  

  car.collide(wall);
  
  deformation = (0.5 * weight * speed * speed)/22500
  
  text(deformation,200,50);
  
if(deformation < 100){
  car.shapeColor="green";
}
if(deformation >100 && deformation <180) 
{car.shapeColor="yellow";
}
if(deformation >180)
{car.shapeColor= "red";
}

  drawSprites();
}