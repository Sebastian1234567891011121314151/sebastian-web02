// playground

let bird, floor;
let bg, base;
let flapMidImg,flapDownImg,flapUpImg;

let pipeGroup;
let pipeImg;
let bottomePipe,topPipe;
let gameOverImg, gameOverLabel;

let startScreenImg, startScreenLabel;

let startGame= false
function preload(){
    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png');

    flapDownImg=loadImage('assets/bluebird-downflap.png');
    flapMidImg=loadImage('assets/bluebird-midflap.png');
    flapUpImg=loadImage('assets/bluebird-upflap.png');

    pipeImg=loadImage('assets/pipe-red.png');

    gameOverImg=loadImage('assets/gameover.png');

    startScreenImg=loadImage('assets/message.png')
}// asset loading





function setup(){
new Canvas(400,600);
background("gray");

bird=new Sprite();
bird.img=flapMidImg;
bird.y=200;
bird.width=34;
bird.height=24;
bird.mass=2;
bird.drag=0.02;
bird.bounciness=0.1;
bird.collider="static";
bird.visible = false;

world.gravity.y= 10;





floor= new Sprite();
floor.collider= "static";
floor.img=base;
floor.y=height - 20;
floor.width= 400;
floor.height=117;
mouseY.bouniness=0.9;

pipeGroup = new Group();


startScreenLabel= new Sprite(width/2, height/2, 184,267,"none");
startScreenLabel.img= startScreenImg;
}






function draw(){
    image(bg,0,0,width,height);
    // if (mouse.presses("left")){
    //     new Sprite(mouseX,mouseY,30,30,"dynamic")
    // }
    // if (mouse.presses("right")){
    //     new Sprite(mouseX,mouseY,30,30,"static")

if (kb.presses("space")||mouse.presses()) {
    startGame=true;
    startScreenLabel.visible=false
}

    if(startGame === true){

        bird.visible=true;
        bird.collider="dynamic"

    

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

        bird.x=bird.x+2;
        camera.x=bird.x;
        floor.x=bird.x;

        if (bird.collides(floor) || bird.collides(pipeGroup)){
            gameOverLabel = new Sprite (width/2, height/2, 192, 42, "none");
            gameOverLabel.img = gameOverImg
            gameOverLabel.layer=1000;
            gameOverLabel.x = camera.x;
            noLoop();
        }



        if(frameCount % 90 === 0){
        spawnPipePair();
        }


        for (let aPipe of pipeGroup){
            if (camera.x-aPipe.x >300+25){
                aPipe.remove()
            }
        }


        // DEBUGGING CODE
        fill("black")
        textSize(14)
        text('vel.y:'+bird.vel.y.toFixed(2),10,20);
        text('is moving:' + bird.isMoving, 10,40);
        text('sleeping:' + bird.sleeping, 10,60);
        text('pipes count:'+pipeGroup.length, 10,80);
        text('frame count:'+frameCount, 10,100);
    }
}// last line






// My custom function
function spawnPipePair() {
    let gap=30;
    let midY=random(200,350);

    bottomPipe=new Sprite(bird.x+300, midY+200+gap/2, 52,320,"static");
    bottomPipe.img=pipeImg;
    pipeGroup.add(bottomPipe);

    topPipe =new Sprite(bird.x+300,midY-gap/2-200,52,320,"static");
    topPipe.img=pipeImg;
    topPipe.rotation=180;
    pipeGroup.add(topPipe);

    pipeGroup.layer=0;
}


