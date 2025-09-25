let bg;
let score=1;
let missedfruit=10;
let timer=10
let gameStart=false

let bgsound,combosound


function preload(){
    bg=loadImage('assets/dojobackground.png');

backgroundsound= createAudio('assets/fruit-ninja-bgtrack.mp3')
slicesound=('')






}




function setup(){
    new Canvas(1000,600);
    background("white");
}



function draw(){



image(bg,0,0,width,height);

// gameStart2()

if (kb.presses('space')){
 gameStart=true;
}

if(gameStart){
    displayPLAY();
}
else{
displayGO();
}



}//last line

function gameStart2(){
    let textmid =width/2;

    textAlign(CENTER , CENTER);
    textSize(60);
    fill("white");
    text('Fruit Ninja',textmid,height/2)
    textSize(30)
    text('Press SPACE to Start!',textmid,375)

}











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
text('Score : '+score,150,textmidhoriz);
text('Missed Fruits : '+missedfruit,500,textmidhoriz);
text('Time : '+timer+' sec',800,textmidhoriz);
}