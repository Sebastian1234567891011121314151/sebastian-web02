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
new floor= new Sprite();
floor.img=base;
floor.y=200
}

function draw(){
image(bg,0,0,width,height);
}