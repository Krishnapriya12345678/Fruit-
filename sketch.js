var knife,knifeImage
var fruit1,fruit1Image
var fruit2,fruit2Image
var fruit3,fruit3Image
var fruit4,fruit4Image
var alien1,alien1Image
var alien2,alien2Image
var score=0;
var fruitGroup
var alienGroup
var gameOver,gameOverImage
var PLAY=1
var END=0
var gameState=PLAY
var gameOverSound
var knifeSound
var position
function preload(){
drawSprites();
knifeImage=loadImage('sword.png')
fruit1Image=loadImage('fruit1.png')
fruit2Image=loadImage('fruit2.png')
fruit3Image=loadImage('fruit3.png')
fruit4Image=loadImage('fruit4.png')
alien1Image=loadImage('alien1.png')
alien2Image=loadImage('alien2.png')
gameOverImage=loadImage('gameover.png')
gameOverSound=loadSound('gameover.mp3')
knifeSound=loadSound('knifeSwooshSound.mp3')
}

function setup(){
  createCanvas(800,800);
drawSprites();
knife=createSprite(200,150,20,20);
knife.addAnimation("knife",knifeImage)
gameOver=createSprite(200,200,10,10)
gameOver.addAnimation("over",gameOverImage)
swordGroup=new Group();
alienGroup=new Group();
fruitGroup=new Group(); 
}




function draw(){
background('violet')
drawSprites();
knife.y=World.mouseY
knife.x=World.mouseX
  
if(fruitGroup.isTouching(knife)){
  fruitGroup.destroyEach();
  score=score+4
  knifeSound.play();
}

  

  
fruits();
enemies();
text ('score '+score,400,80);
  
if(gameState==PLAY){
gameOver.visible=false
knife.y=World.mouseY
knife.x=World.mouseX
  
 if(fruitGroup.isTouching(knife)){
  fruitGroup.destroyEach();
  score=score+4
  knifeSound.play();
} 
if(alienGroup.isTouching(knife)){
  gameState=END
  gameOverSound.play();
} 
}
if(gameState==END){
  fruitGroup.destroyEach();
  alienGroup.destroyEach();
  fruitGroup.velocityX=0;
  alienGroup.velocityX=0;
  knife.x=0;
  knife.y=0;
  gameOver.visible=true

}
  

  
}  
 
function fruits(){

 if(frameCount%80==0){
   fruit=createSprite(450,200,15,15)
   fruit.scale=0.2
   f=Math.round(random(1,4))
   if(f==1){
    fruit.addAnimation("fru1",fruit1Image)
   }else if(f==2){
     fruit.addAnimation("fru2",fruit2Image)
   }else if(f==3){
     fruit.addAnimation("fru3",fruit3Image)
   }else if(f==4){
     fruit.addAnimation("fru4",fruit4Image)
   }
   position=Math.round(random(1,2))
   if(position==1){
     fruit.x=400
     fruit.velocityX=-(7+(score/4))
   }else if(position==2){
     fruit.x=0
     fruit.velocityX=(7+(score/4))
   }
   fruit.x=Math.round(random(550,100))
   fruit.y=Math.round(random(50,450))
   
  
  
   fruit.lifetime=75
   fruitGroup.add(fruit)
 }
  
}

function enemies(){
if(frameCount%200==0){
  alien=createSprite(400,200,10,10)
  alien.scale=1.5
  alien.addAnimation("alien1",alien1Image)
  alien.velocityX=(8+(score/10));
   alien.y=Math.round(random(50,200))
   alien.x=Math.round(random(600,100))
  alien.lifetime=200
  alienGroup.add(alien)
 }
}


