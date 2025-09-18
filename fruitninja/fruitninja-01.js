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

textSize(36)
fill()

text("Game Over!")
}