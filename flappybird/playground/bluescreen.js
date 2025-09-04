let score = 0;
// let digit0;
let digitImgs= [];
function setup(){
    new Canvas (400,600);
    background("lightblue");




    scoreSprite = new Sprite(200,300,24,36,"none");
    // scoreSprite.img = digit0;



}

function preload(){


        let prefix = "assets/";
    let postfix= ".png";
    for (let count=0; count<10; count++){
        let filename= prefix+ count+ postfix;
        // console.log(filename);
        digitImgs[count]= loadImage(filename)
    }

    // digit0=loadImage('assets/0.png');

}


function draw(){

    background("lightblue");
    textSize(16);
    text("score:"+score,20,50);

    if (kb.presses('up')){
        score++;

    }
    else if (kb.presses('down')){
        score--;

    }
score = constrain(score,0,9);
displayScore();



}
function displayScore(){
    scoreSprite.img = digitImgs[0];

    let scoreString= str(score);
}