// playground

let bird, floor;
let bg, base;
function preload(){
bg = loadImage('assets/background-day.png');
base = loadImage('assets/base.png');
}
function setup(){
new Canvas(400,600);
background("gray");
floor= new Sprite();
floor.collider= "Static"
floor.img=base;
floor.y=height - 20
}

function draw(){
image(bg,0,0,width,height);
}