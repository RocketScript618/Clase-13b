var trex, trex_running, trex_collided, trex_down, trex2;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var ground, invisibleGround, groundImage;
var tero_fly;
var clouds;
var dinoImg;


function preload() {
  dinoImg = loadImage("test.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  trex_down = loadAnimation("trex_down1.png","trex_down2.png");
  clouds = loadImage("cloud.png");
  groundImage = loadImage("ground2.png")
  tero_fly = loadAnimation("tero1.png","tero1.png","tero2.png","tero2.png");
}

function setup() {
createCanvas(600, 200);

//crear sprite de Trex
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.addAnimation("down",trex_down);
trex.scale = 0.5;
//crear sprite de suelo
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;

invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible=false;


}

function draw() {
  background(117, 109, 109);
//hacer que el Trex salte al presionar la barra espaciadora
if (keyDown("space")&&trex.y>=153) {
  trex.velocityY = -13;
}
if(keyDown("down")){
  trex.changeAnimation("down",trex_down);
  trex.scale = 0.35;
}
if(keyWentUp("down")){
  trex.changeAnimation("running",trex_running);
  trex.scale = 0.5;
}
trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

trex.collide(invisibleGround);

dino_spawn();
cactus_spawn();
tero_spawn();
cloud_spawn();
drawSprites();
}

function cloud_spawn(){
  if(frameCount % 60 == 0){
    var cloud = createSprite(500,70);
    fill("black");
    cloud.y = Math.round(random(25,85));
    cloud.velocityX = -3;
    cloud.addImage(clouds);
    cloud.scale =0.1;
    cloud.lifetime = 210;

    cloud.depth = trex.depth;
    trex.depth = trex.depth+1;
  }
}

function tero_spawn(){
  if(frameCount % 75 == 0){
    var tero = createSprite(550,125);
    tero.addAnimation("flying", tero_fly);
    tero.y = Math.round(random(125,150));
    tero.velocityX = -4;
    tero.scale = 0.9;
  }
}

function dino_spawn(){
  if(frameCount % 90 == 0){
    var dino = createSprite(550,175);
    dino.addImage(dinoImg);
    dino.velocityX = -4;
    dino.scale = 0.5
  }
}

function cactus_spawn(){
  if(frameCount % 60 ==0){
    var obstacle = createSprite(550,165,10,40);
    obstacle.velocityX= -3;
    var ran = Math.round(random(1,6))
    switch(ran){
      case 1:
        obstacle.addImage(obstacle1);
        break;
      case 2:
        obstacle.addImage(obstacle2);
        break;
      case 3:
        obstacle.addImage(obstacle3);
        break;
      case 4:
        obstacle.addImage(obstacle4);
        break;
      case 5:
        obstacle.addImage(obstacle5);
        break;
      case 6:
        obstacle.addImage(obstacle6);
        break;
      default:
        break;
    }
    obstacle.scale=0.4;
  }
}

//function day_cycle(){
//  var hour = 0;
//  hour = hour+1;
//  if(hour)
//}