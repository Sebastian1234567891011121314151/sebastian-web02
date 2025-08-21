// playground

let bird, floor;
let bg, base;
let flapMidImg,flapDownImg,flapUpImg;

let pipeGroup;
let pipeImg;
let bottomePipe,topPipe;

function preload(){
    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png');
    flapDownImg=loadImage('assets/bluebird-downflap.png');
    flapMidImg=loadImage('assets/bluebird-midflap.png');
    flapUpImg=loadImage('assets/bluebird-upflap.png');
    pipeImg=loadImage('assets/pipe-red.png');
}// asset loading
function setup(){
new Canvas(400,600);
background("gray");

bird=new Sprite();
bird.img=flapMidImg;
bird.y=200;
bird.width=30;
bird.height=30;
bird.mass=2;
bird.drag=0.02;
bird.bounciness=0.1;
bird.collider="dynamic"

world.gravity.y= 10;





floor= new Sprite();
floor.collider= "static";
floor.img=base;
floor.y=height - 20;
floor.width= 400;
floor.height=117;
mouseY.bouniness=0.9;

pipeGroup = new Group();

}

function draw(){
    image(bg,0,0,width,height);
    // if (mouse.presses("left")){
    //     new Sprite(mouseX,mouseY,30,30,"dynamic")
    // }
    // if (mouse.presses("right")){
    //     new Sprite(mouseX,mouseY,30,30,"static")

    if (kb.presses("space")||mouse.presses("left")){
        bird.vel.y=-5;
        bird.sleeping=false;
    }

    if(bird.vel.y < -1){
        bird.img=flapDownImg;
        bird.rotation= 0;
    }
    else if(bird.vel.y > 1) {
        bird.img=flapUpImg;
        bird.rotation= 0;

    }
    else {
        bird.img=flapMidImg;
        bird.rotation= 0;
    }

bird.x=bird.x+1;
camera.x=bird.x;
floor.x=bird.x;



if(frameCount % 100 === 0){
spawnPipePair();
}





// DEBUGGING CODE
    fill("black")
    textSize(14)
    text('vel.y:'+bird.vel.y.toFixed(2),10,20);
    text('is moving:' + bird.isMoving, 10,40);
    text('sleeping:' + bird.sleeping, 10,60);
    text('pipes count:'+pipeGroup.length, 10,80);
    text('frame count:'+frameCount, 10,100);

}// last line

// My custom function
function spawnPipePair() {
let gap=40;
let midY=random(250,height-250);

bottomPipe=new Sprite(bird.x+400, midY+200+gap/2, 52,320,"static");
bottomPipe.img=pipeImg;
pipeGroup.add(bottomPipe);

topPipe =new Sprite(bird.x+400,midY-gap/2-200,52,320,"static");
topPipe.img=pipeImg;
topPipe.rotation=180;
pipeGroup.add(topPipe);

pipeGroup.layer=0;
}