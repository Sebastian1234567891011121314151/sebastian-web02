let bg;
let score=1
let missedfruit=10
function preload(){
    bg=loadImage('assets/dojobackground.png');
}




function setup(){
    new Canvas(1000,600);
    background("white");
}



function draw(){
image(bg,0,0,width,height)

}//last line


function displayGO()