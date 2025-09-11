let score = 0;
// let digit0;
let digitImgs= [];
let scoreGroup;

function setup(){
    new Canvas (400,600);
    background("lightblue");

    scoreGroup = new Group();
    scoreGroup.collider = "none";
    scoreGroup.layer =1000;






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
score = constrain(score,0,99);
displayScore();




}
function displayScore(){
    // scoreSprite.img = digitImgs[0];

    scoreGroup.removeAll();

    let scoreString= str(score);
    let scoreDigitArray = scoreString.split("");
    
    text("digits array size:" + scoreDigitArray,20,70);

    let offset=0;
    let middle= width/2;
    for(let one of scoreDigitArray){
        let onedigit= new scoreGroup.Sprite(middle+offset,height/2,24,26);
        onedigit.img=digitImgs[one]
        offset=offst+25
    }
}