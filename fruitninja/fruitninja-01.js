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
let textmid =width/2

textAlign(CENTER , CENTER)



textSize(45)
fill("red")
text('Game Over!',textmid,height/2)
textSize(25)
fill("white")
text('Score : ',textmid,350)
text('Missed Fruits : ',textmid,400)
text('Press SPACE to Restart',textmid,450)
}//last line
