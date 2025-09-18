let bg;

function preload(){
    bg=loadImage('assets/dojobackground.png');
}




function setup(){
    new Canvas(1000,600);
    background("white");
}



function draw(){
image(bg,0,0,1000,600)

textSize(40)
fill("red")
text('Game Over!', 400,300)
textSize(18)
fill("white")
text('Score : ')
}