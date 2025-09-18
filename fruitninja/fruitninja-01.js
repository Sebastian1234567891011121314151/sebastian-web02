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

textSize(45)
fill("red")
text('Game Over!', 400,300)
textSize(25)
fill("white")
text('Score : ',450,350)
text(' ',450,350)
text('Score : ',450,350)
}//last line
