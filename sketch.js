var bullet,wall,speed,weight,thickness;

function setup() {
createCanvas(1600,400);
//createSprite(400, 200, 50, 50);
speed = random(223,321);
weight = random(30,52);
thickness= random(22,83)
bullet = createSprite(50,200,20,10);
bullet.shapeColor = rgb(255,255,255);
wall = createSprite(1200,200,thickness,200);
wall.shapeColor = rgb(80,80,80);
bullet.velocityX = speed;
//var deformation;
//deformation = 0.5*weight*speed*speed/22500 
}


function draw() { 
  //background(255,255,255);
  background(0,0,255);

  //console.log("wall.x=" + wall.x + "; wall.width=" + wall.width + "; bullet.x=" + bullet.x + "; bullet.width=" + bullet.width + ";");
  if(hasCollided(bullet, wall))
  {
    //console.log("inside the if block");
    bullet.velocityX=0;
    var damage=(0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    //console.log("deformation=" + deformation);
    if(damage>10)
    { 
      bullet.shapeColor=color(255,0,0);
    }
    else
    {
      bullet.shapeColor=color(0,255,0);
    }
  }

drawSprites();
}

function hasCollided(abullet,awall) {

  bulletRightEdge = abullet.x + abullet.width;
  wallLeftEdge = awall.x;
  if (bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;
    
}