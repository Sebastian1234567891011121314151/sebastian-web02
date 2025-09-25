let bg;
let score=1;
let missedfruit=10;
let timer=60
let gameStart=false

let FCstart=0

let bgsound,combosound


function preload(){
    bg=loadImage('assets/dojobackground.png');

backgroundsound= createAudio('assets/fruit-ninja-bgtrack.mp3')
slicesound=createAudio('assets/fruit-ninja-combo.mp3')






}




function setup(){
    new Canvas(1000,600);
    background("white");
}



function draw(){

clear();

image(bg,0,0,width,height);



if (kb.presses('space')){
 gameStart=true;

}

if(gameStart){
    displayPLAY();
if (FCstart<0)  {   
    FCstart=frameCount
}  

    if ((frameCount-FCstart) % 60 ===0){
        timer--
}
    if(kb.presses('1')){
    backgroundsound.loop();
}
    else if (kb.presses('2')){
    backgroundsound.stop();
}
    else if (kb.presses('3')){
    slicesound.play();
}
    else if (kb.presses('4')){
    clear();
    displayGO();
}


//     else if (kb.presses('5')){
//     clear();
//     displayPLAY();
// }



}
else{
gameStart2();
}



}//last line

function gameStart2(){
    let textmid =width/2;

    textAlign(CENTER , CENTER);
    textSize(60);
    fill("white");
    text('Fruit Ninja',textmid,height/2);
    textSize(30);
    text('Press SPACE to Start!',textmid,375);

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
textAlign(CENTER,CENTER )
textSize(25);
fill("white");
text('Missed Fruits : '+missedfruit, width/2,28)
textAlign(RIGHT,CENTER );
text('Score : '+score,333,28);
textAlign(LEFT,CENTER )
text('Time : '+timer+'s',width-333,28);
}