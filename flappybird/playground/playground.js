// playground

let bird, floor;
let bg, base;
let flapMidImg,flapDownImg,flapUpImg;
function preload(){
bg = loadImage('assets/background-day.png');
base = loadImage('assets/base.png');
flapDownImg=loadImage('assets/bluebird-downflap.png');
flapMidImg=loadImage('assets/bluebird-midflap.png');
flapUpImg=loadImage('assets/bluebird-upflap.png');
}
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

}

function draw(){
image(bg,0,0,width,height);
}