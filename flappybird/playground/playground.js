// playground

let bird, floor;
let bg, base;
let flapMidImg,flapDownImg,flapUpImg;
function preload(){
bg = loadImage('assets/background-day.png');
base = loadImage('assets/base.png');
flapDownImg=loadImage('assets/bluebird-downflap.png')
flapMidImg=loadImage('assets/bluebird-midflap.png')
flapUpImg=loadImage('assets/bluebird-upflap.png')
}
function setup(){
new Canvas(400,600);
background("gray");
bird
floor= new Sprite();
floor.collider= "static";
floor.img=base;
floor.y=height - 20
}

function draw(){
image(bg,0,0,width,height);
}