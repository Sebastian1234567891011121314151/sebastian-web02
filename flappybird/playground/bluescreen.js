let score = 0;
let digit0;
function setup(){
    new Canvas (400,600);
    background("lightblue");
    scoreSprite = new Sprite(200,300,24,36,"none");
    scoreSprite.img = digit0;

}

function preload(){
    digit0=loadImage('assets/0.png');
}


function draw(){
    textSize(16);
    text("score:"+score,20,50);

    if (kb.presses('up'))
    score++



}