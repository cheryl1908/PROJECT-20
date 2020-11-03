var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,1500);

  speed=random(55,90);
  weight=random(400,1500);
  wall=createSprite(1500,200,60,height/2);
  car=createSprite(50,200,50,50);
}
function draw() {
  background(0); 
  
  car.velocityX=speed/2;

  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor=rgb(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=rgb(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=rgb(0,255,0);  
    }
  }
  drawSprites();
}
