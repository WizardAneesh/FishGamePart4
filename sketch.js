var fish, fish1, fish2, fish3, fish1Img
var swordfish, swordfishImg
var ocean, oceanImg
var smallfishes, smallfishesImg
var redfish, redfishImg
var bubble, bubbleImg
var boat, boatImg, boatGroup
var beach, beachImg
var gold, goldImg
var shark, sharkImg
var score = 0

function preload(){
    oceanImg = loadImage("oceanproject.png")
    fish1Img = loadAnimation("fish.png", "fish1.png","fish2.png", "fish3.png", "fish.png", "fish1.png","fish2.png", "fish3.png");
    swordfishImg = loadImage("swordfish.png");
    smallfishesImg = loadImage("Fishes.png");
    redfishImg = loadImage("Redfish.png");
    bubbleImg  = loadImage("bubbles.png");
    boatImg = loadImage("brokenboat.png");
    beachImg = loadImage("treasureisland2.png");
    goldImg = loadImage("goldcoinstreasure.png");
    sharkImg = loadImage("shark.png");

}

function setup() {
 createCanvas(1000,1000)
 ocean = createSprite(400,400);
 ocean.addImage(oceanImg)

 fish = createSprite(500,500,20,50);
 fish.addAnimation("running",fish1Img)
 fish.scale = 0.2
 fish.frameDelay=20;
 edges=createEdgeSprites()
 ocean.velocityX = -1

 

 fishgroup = new Group()
 boatGroup = new Group()
 sharkGroup = new Group()
 swordfishGroup = new Group()

}

function draw() {
 background(0);
 drawSprites()

 if(ocean.x < 0){
    ocean.x=ocean.width/8
 }

 fish.x = World.mouseX;
 fish.y = World.mouseY;
 //fish.bounceOff(edges[1]);
 //fish.bounceOff(edges[2]);
 fish.bounceOff(edges[3]);
 //fish.bounceOff(edges[4]);

 if(fishgroup.isTouching(fish)){
    fishgroup[0].destroy()
    bubbles()
    score+=5
    fish.x = 200
 }
 if(sharkGroup.isTouching(fish)){
    sharkGroup[0].destroy()
    score-=10
 }

 if(swordfishGroup.isTouching(fish)){
    swordfishGroup[0].destroy()
    score-=20
 }

 if(boatGroup.isTouching(fish)){
    console.log("imnboat")
    boatGroup[0].destroy()
    spawnBeach()
  //  goldCoins()
 }



 Redfishes()
 brokenboat()
 spawnShark()
 spawnFishes()
 Redfishes()
 spawnFishes()
 goldCoins()
 spawnEnemy2()
 textSize(34)
 fill("red")
 //text(mouseX+","+mouseY,mouseX,mouseY);
 text("Score:" + score,700,60)
 if (score<=-20){
    text("gameOver", 500,500);
 }
 
 

}
function spawnBeach(){
    beach = createSprite(400,700,300,300);
    beach.addImage(beachImg)
    //goldCoins()
   
}

function spawnFishes(){
    if (frameCount%240==0){

    
    smallfishes = createSprite(200,100);
    smallfishes.addImage(smallfishesImg);
    smallfishes.scale = 0.2
    smallfishes.x = Math.round(random(120,400))
    smallfishes.y = Math.round(random(120,400))
    smallfishes.velocityX = 2
    smallfishes.lifetime=200
    fishgroup.add(smallfishes)
    
}
}

function spawnEnemy2(){
    if (frameCount%240==0){
        swordfish = createSprite(200,100);
        swordfish.addImage(swordfishImg);
        swordfish.scale = 0.5
        swordfish.x = Math.round(random(-600,700));
        swordfish.y= Math.round(random(-300,600));
        swordfish.velocityX = 4
        swordfishGroup.add(swordfish)
    }

}
function Redfishes(){
    if (frameCount%240==0){

    
    redfishes = createSprite(300,50);
    redfishes.addImage(redfishImg);
    redfishes.scale = 0.2
    redfishes.x = Math.round(random(-50,600))
    redfishes.y = Math.round(random(-700,700))
    redfishes.velocityX = -2
    redfishes.lifetime=200
    fishgroup.add(redfishes)
    
}
}

function spawnShark(){
    if (frameCount%240==0){
        shark = createSprite(200,100);
        shark.addImage(sharkImg);
        shark.scale = 0.3
        shark.x = Math.round(random(-50,600))
        shark.y = Math.round(random(50,300))
        shark.velocityX = 2
        shark.lifetime=300
        sharkGroup.add(shark)
    }
}

function bubbles(){
    bubble = createSprite(fish.x, fish.y);
    bubble.addImage(bubbleImg);
    bubble.scale = 0.3
    bubble.velocityY = 2
    bubble.lifetime=200
    
}

function brokenboat(){
    if (frameCount==240){
        boat = createSprite(300,800);
        boat.addImage(boatImg);
        boat.scale = 0.2
        boatGroup.add(boat);
        //boat.velocityX = -2
        //redfishes.lifetime=200
        //fishgroup.add(swordfish)
    }
}


function goldCoins(){
    if (frameCount==240){
        gold = createSprite(300,800);
        gold.addImage(goldImg);
        gold.scale = 0.2
    }
}