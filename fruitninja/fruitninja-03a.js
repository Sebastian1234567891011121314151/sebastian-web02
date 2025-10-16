let bg;

let score=1;
let missedfruit=10;
let timer=60


let gameState="start"
// let fruitGroup

// let fruitTypes=[]
let FCstart=0
// let fruitHalves;
let bgsound,combosound


function preload(){
    bg=loadImage('assets/dojobackground.png');

backgroundsound= createAudio('assets/fruit-ninja-bgtrack.mp3')
slicesound=createAudio('assets/fruit-ninja-combo.mp3')

// let peach={
//     whole:loadImage('assets/peachwhole.png')
// };
// let watermelon={
//     whole:loadImage('assets/watermelonwhole.png')
// };
// fruitTypes=[peach,watermelon]


}




function setup(){
    new Canvas(1000,600);
    background("white");
    world.gravity.y=10;
}



function draw(){

    clear();

    image(bg,0,0,width,height);

    if(gameState==="start"){
        gameStarting();

        // wait for player
        if (kb.presses('space')){
        gameState="play";

        }
    }
    else if(gameState==="play"){
        gamePlay();

        if (FCstart<0)  {   
            FCstart=frameCount
        }  

        if ((frameCount-FCstart+1) % 60 ===0){
            timer--
        }
        if (timer===0){
            gameState = "gameover";
            return;
        }
//     if(kb.presses('1')){
//     backgroundsound.loop();
// }
//     else if (kb.presses('2')){
//     backgroundsound.stop();
// }
//     else if (kb.presses('3')){
//     slicesound.play();
// }
// if (mouse.presses()){
//     let ball=new Sprite(mouseX,mouseY,30)
//     ball.vel.y=random(-5,-20)
// }
// slice animation
        if (mouse.pressing()){
            let trail = new Sprite(mouseX,mouseY,7);
            trail.color="white";
            trail.stroke="white"
            trail.collider="none"
            trail.life=10;
        }
    }
    else if(gameState==="gameover"){
        displayGO();

        // wait for player
        if (kb.presses('space')){
        gameState="play";

        }
    }





//     else if (kb.presses('5')){
//     clear();
//     gamePlay();
// }

}//last line

function gameStarting(){
 
    let textmid =width/2;

    textAlign(CENTER , CENTER);
    textSize(60);
    fill("white");
    text('Fruit Ninja',textmid,height/2);
    textSize(30);
    text('Press SPACE to Start!',textmid,375);

}


function displayGO(){
    clear();
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


function gamePlay(){

    textAlign(CENTER,CENTER )
    textSize(25);
    fill("white");
    text('Missed Fruits : '+missedfruit, width/2,28)
    textAlign(RIGHT,CENTER );
    text('Score : '+score,333,28);
    textAlign(LEFT,CENTER )
    text('Time : '+timer+'s',width-333,28);
}

// function sliceFruit(){
//     for(let fruit of fruitGroup){
//         if(fruit.sliced){
//             continue;
//         }
//         let distance  = dist(mouse.x,mouse.y,fruit.x,fruit.y);
//         if(distance<((fruit.diameter/2)+5)){
//             const fx = fruit.x;
//             const fy = fruit.y;
//             fruit.sliced= true;
//             fruit.remove();
//             splitFruit(fx,fy,fruit.type);

//             break;
//         }
//     }
// }


// function splitFruit(x,y,fruitData){
//     let left = new fruitHalves.Sprite(x-10,y,40,40);
//     left.img = fruitData.half;
//     //set the physics
//     left.vel.x = -3;
//     left.vel.y = random(-5,-2);
//     left.rotationSpeed = -5;
//     left.life = 30;

//     //do for the right as well
//     let right = new fruitHalves.Sprite(x-10,y,40,40);
//     right.img = fruitData.half;
//     //set the physics
//     right.vel.x = 3;
//     right.vel.y = random(-5,-2);
//     right.rotationSpeed = 5;
//     right.life = 30;
// }