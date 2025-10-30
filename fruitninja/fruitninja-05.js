let bg;

let score=0;
let missedfruit=0;
let timer=5


let gameState="start"
let fruitGroup

let fruitTypes=[]
let FCstart=0
let fruitHalves;
let bgsound,combosound


function preload(){
    bg=loadImage('assets/dojobackground.png');

backgroundsound= createAudio('assets/fruit-ninja-bgtrack.mp3')
slicesound=createAudio('assets/fruit-ninja-combo.mp3')

let peach={
    whole:loadImage('assets/peachwhole.png'),
    half:loadImage('assets/peachhalf2.png')
};
let watermelon={
    whole:loadImage('assets/watermelonwhole.png'),
    half:loadImage('assets/watermelonhalf.png')
};
let lemon={
    whole:loadImage('assets/lemon.png'),
    half:loadImage('assets/cut_lemon.png')
};
let bomb={
    whole:loadImage('assets/fruitbomb.png'),
    half:loadImage('assets/fruitbomb.png')
};
fruitTypes=[peach,watermelon,lemon]


}




function setup(){
    new Canvas(1000,600);
    background("white");
    world.gravity.y=10;

    fruitGroup= new Group();
    fruitHalves=new Group();

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
        if (frameCount % 60===0){
            spawnFruit()
        }
        for(let one of fruitGroup){
            if (one.y>height+10){
                missedfruit++;
                one.remove();
            }
        }

    


        
// slice animation
        if (mouse.pressing()){
            let trail = new Sprite(mouseX,mouseY,7);
            trail.color="white";
            trail.stroke="white"
            trail.collider="none"
            trail.life=10;
            sliceFruit();
        }
    }
    else if(gameState==="gameover"){
        displayGO();

        // wait for player
        if (kb.presses('space')){
            timer=60;
            score=0;
            missedfruit=0;
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
    text('Number of Fruits:' + fruitGroup.length , 100,60)
    


}

function sliceFruit(){
    for(let fruit of fruitGroup){
        if(fruit.sliced){
            continue;
        }

        let distance  = dist(mouse.x,mouse.y,fruit.x,fruit.y);
        if(distance<((fruit.diameter/2)+5)){
            const fx = fruit.x;
            const fy = fruit.y;
            const typeoffruit= fruit.type
            fruit.sliced= true;
            fruit.remove();
            if(typeoffruit.type==="bomb"){
                displayGO;
            }
            else{
                score++
            }
            splitFruit(fx,fy,fruit.type);

            break;
        }
    }
}

function spawnFruit(){
    let one= new fruitGroup.Sprite();

    let selected=random(fruitTypes);
    one.img=selected.whole;
    one.type=selected;

    one.diameter=40;
    one.x=random(200,700);
    one.y=height-100;

    one.vel.y=random(-12,-7);
    one.vel.x=random(-3,3);
    one.friction=0;


}








function splitFruit(x,y,fruitData){
    let left = new fruitHalves.Sprite(x-10,y,40,40);
    left.img = fruitData.half;
    //set the physics
    left.vel.x = -3;
    left.vel.y = random(-5,-2);
    left.rotationSpeed = -5;
    left.life = 30;

    //do for the right as well
    let right = new fruitHalves.Sprite(x-10,y,40,40);
    right.img = fruitData.half;
    //set the physics
    right.vel.x = 3;
    right.vel.y = random(-5,-2);
    right.rotationSpeed = 5;
    right.life = 30;
}