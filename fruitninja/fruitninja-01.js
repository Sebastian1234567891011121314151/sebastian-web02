let bg;
let score=1;
let missedfruit=10;
function preload(){
    bg=loadImage('assets/dojobackground.png');
}




function setup(){
    new Canvas(1000,600);
    background("white");
}



function draw(){
image(bg,0,0,width,height);
// displayGO();
displayPLAY()

if (kb.presses('space')){
    console.log("hi")
}



}//last line


function displayGO(){
    let textmid =width/2;

textAlign(CENTER , CENTER);



textSize(45)
fill("red")
text('Game Over!',textmid,height/2);
textSize(25);
fill("white");
text('Score : '+score,textmid,350);
text('Missed Fruits : '+missedfruit,textmid,400);
text('Press SPACE to Restart',textmid,450);
}


function displayPLAY(){
let textmidhoriz=75
textAlign(RIGHT,CENTER )
textSize(25);
fill("white");
text('Score : '+score,50,textmidhoriz);
text('Missed Fruits : '+missedfruit,150,textmidhoriz);
text('Press SPACE to Restart',250,textmidhoriz);
}