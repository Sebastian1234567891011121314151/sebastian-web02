let score = 0;
let digit0;
function setup(){
    new Canvas (400,600);
    background("blue");
    scoreSprite
}

function preload(){
    digit0=loadImage('assets/0.png');
}


function draw(){
    textSize(16);
    text("score:"+score,20,50);
}