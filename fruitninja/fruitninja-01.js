let bg;

function preload(){
    bg=loadImage('assets/dojobackground.png');
}




function setup(){
    new Canvas(1000,600);
    background("white");
}



function draw(){
image(bg,0,0,width,height)


textAlign(CENTER , CENTER)



textSize(45)
fill("red")
text('Game Over!',width/2)
textSize(25)
fill("white")
text('Score : ',450,350)
text('Missed Fruits : ',450,400)
text('Press SPACE to Restart',450,450)
}//last line
