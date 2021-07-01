var bg;
var snow,snow_Img;
var music;
var girl,girlImg;
var snowman,snowmanImg,star,starI;

function preload(){
  bg = loadImage("snow1.jpg");
  snow_Img = loadImage("snow5.webp");
  music = loadSound("roa-music-snow-dancer.mp3");
  girlImg = loadImage("Winter Girl 1.png");
  snowmanImg = loadImage("snowMan.png");
  starI = loadImage("star.png");
}

function setup() {
  createCanvas(800,400);

  girl = createSprite(600,200,30,30);
  girl.addImage(girlImg);
  girl.scale = 0.4;
  music.play();

  star = createSprite(100,200,20,20);
  star.addImage(starI);
}

function draw() {
  background(bg);  
    fill("black");
    textSize(20);
    text("Press space key and invite Snow Man",400,50);

  drawSprites();

  if(keyDown("space")){
    
    snowman = createSprite(100,200,20,20);
    snowman.addImage(snowmanImg);
    snowman.scale = 0.3;
  }

  if(frameCount%60===0){
    snow = createSprite(200,10,100,100);
    snow.addImage(snow_Img);
    snow.scale = 0.1;
    snow.velocityY = 4;
    snow.x = Math.round(random(100,800));
  }
}