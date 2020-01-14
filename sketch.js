function preload() {
  walker_ = loadAnimation("robot_1.png","robot_2.png","robot_3.png","robot_4.png");
  walker_1 = loadAnimation("robot_3.png","robot_4.png","robot_1.png","robot_2.png");
  body_ = loadImage("robot.png");
  turret_ = loadImage("turret.png");
  title_ = loadImage("title.png");
  walker__ = loadImage("robot_1.png");
  walker__1 = loadImage("robot_3.png");
  bullet_ = loadImage("laser.png");
}

function setup() {
  createCanvas(1300,600);
  ground = createSprite(650,0,1300,3.3);
  ground.shapeColor = "black";
  ground_1 = createSprite(650,200,1300,3.3);
  ground_1.shapeColor = "black";
  ground_2 = createSprite(650,400,1300,3.3);
  ground_2.shapeColor = "black";
  ground_3 = createSprite(260,300,3.3,600);
  ground_3.shapeColor = "black";
  ground_4 = createSprite(520,300,3.3,600);
  ground_4.shapeColor = "black";
  ground_5 = createSprite(780,300,3.3,600);
  ground_5.shapeColor = "black";
  ground_6 = createSprite(1040,300,3.3,600);
  ground_6.shapeColor = "black";
  ground_7 = createSprite(1300,300,3.3,600);
  ground_7.shapeColor = "black";
  bullet = createSprite(650,285,3.3,3.3);
  bullet.addImage("bull", bullet_)
  walker = createSprite(650,290,100,100);
  walker.addAnimation("walk", walker_);
  walker.scale=0.4;
  walker1 = createSprite(650,254,100,100);
  walker1.addAnimation("walk2", walker_1);
  walker1.scale=1/3;
  walker2 = createSprite(650,290,100,100);
  walker2.addAnimation("stand", walker__);
  walker2.scale=0.4;
  walker.visible = false;
  walker3 = createSprite(650,254,100,100);
  walker3.addAnimation("stand2", walker__1);
  walker3.scale=1/3;
  walker1.visible = false;
  body = createSprite(650,275,100,100);
  body.addImage("bod", body_)
  body.scale=0.3;
  turret = createSprite(650,285.5,1,1);
  turret.addImage("turr", turret_)
  turret.debug = true;
  turret.setCollider("circle",0,0,25)
  turret.scale = 1/3
  title = createSprite(650,300,100,100);
  title.addImage("tit", title_);
  TITLE=1;
  PLAY=2;
  gameState = TITLE;
}

function draw() {
  background(100,100,100);  
  //movement();
  drawSprites();
  if(keyDown("left")) {
    turret.rotation = turret.rotation-6;  
  }
  if(keyDown("right")) {
    turret.rotation = turret.rotation+6;
  }
  if (keyDown("Space") && gameState === TITLE) {
  gameState = PLAY;
  title.destroy();
  }
  if (gameState === PLAY) {
    alottastuff();
    }
  noFill();
  strokeWeight(10);
  rect(2,2,1294,594)
  
} 

function alottastuff() {
  if (keyDown("W")) {
    ground.velocityY=10;
    ground_1.velocityY=10;
    ground_2.velocityY=10;
    walker.visible = true;
    walker1.visible = true;
    walker2.visible = false;
    walker3.visible = false;
    walker.rotation = 0;
    walker1.rotation = 0;
    walker2.rotation = 0;
    walker3.rotation = 0;
  }
  if (keyWentUp("W")) {
    ground.velocityY=0;
    ground_1.velocityY=0;
    ground_2.velocityY=0;
    walker.visible = false;
    walker1.visible = false;
    walker2.visible = true;
    walker3.visible = true;
    walker.rotation = 0;
    walker1.rotation = 0;
    walker2.rotation = 0;
    walker3.rotation = 0;
  }
  if (keyDown("S")) {
    ground.velocityY=-10;
    ground_1.velocityY=-10;
    ground_2.velocityY=-10;
    walker.visible = true;
    walker1.visible = true;
    walker2.visible = false;
    walker3.visible = false;
    walker.rotation = 0;
    walker1.rotation = 0;
    walker2.rotation = 0;
    walker3.rotation = 0;
  }
  if (keyWentUp("S")) {
    ground.velocityY=0;
    ground_1.velocityY=0;
    ground_2.velocityY=0;
    walker.visible = false;
    walker1.visible = false;
    walker2.visible = true;
    walker3.visible = true;
    walker.rotation = 0;
    walker1.rotation = 0;
    walker2.rotation = 0;
    walker3.rotation = 0;
  }
  
  if (ground.y>600) {
    ground.y=0
  }
  if (ground.y<0) {
    ground.y=600
  }
  if (ground_1.y>600) {
    ground_1.y=0
  }
  if (ground_1.y<0) {
    ground_1.y=600
  }
  if (ground_2.y>600) {
    ground_2.y=0   
  } 
  if (ground_2.y<0) {
    ground_2.y=600
  }
  if (ground_3.x>1300) {
    ground_3.x=0
  }
  if (ground_3.x<0) {
    ground_3.x=1300
  }
  if (ground_4.x>1300) {
    ground_4.x=0
  }
  if (ground_4.x<0) {
    ground_4.x=1300
  }
  if (ground_5.x>1300) {
    ground_5.x=0
  }
  if (ground_5.x<0) {
    ground_5.x=1300
  }
  if (ground_6.x>1300) {
    ground_6.x=0
  } 
  if (ground_6.x<0) {
    ground_6.x=1300
  }
  if (ground_7.x>1300) {
    ground_7.x=0
  } 
  if (ground_7.x<0) {
    ground_7.x=1300
  }
  if (keyDown("enter")) {
    bullet.addSpeed(20,turret.rotation-90);
  }
  if (bullet.y>600 || bullet.y<0 || bullet.x>1300 || bullet.x<0) {
    bullet.y=285;
    bullet.x=650;
    bullet.lifeTime=12;
  }
}