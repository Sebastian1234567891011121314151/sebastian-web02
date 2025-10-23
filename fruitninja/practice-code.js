
// let watermelon
// let watermelonimg
// let bg

// function preload(){
//     watermelonimg=loadImage('assets/watermelonwhole.png')
//     bg=loadImage('assets/dojobackground.png')
    
// }


// function setup(){
//     world.gravity.y=10
//     new Canvas(400,600)
//     background("white")

//     watermelon=new Sprite(200,300,50);
//     watermelon.img=watermelonimg




//     // let fruitshop ={
//     //     apple: 0.3,
//     //     pineapple:1.6,
//     //     grape:0.5,
//     //     kiwi:0.25
//     // }
//     // console.log(fruitshop);
//     // console.log(fruitshop.apple);

//     // fruitshop.dragonfruit = 0.7
//     // console.log(fruitshop)


//     // let apple ={
//     //     name:"Apple",
//     //     price:0.4,
//     //     quantity:50
//     // };

//     // let lemon ={
//     //     name:"Lemon",
//     //     price:0.2,
//     //     quantity:100
//     // };
//     // let watermelon ={
//     //     name:"Watermelon",
//     //     price:1.3,
//     //     quantity:20
//     // };



//     // console.log(apple);
//     // let shopkeeper = [apple,lemon,watermelon];
//     // let randomFruit = random(shopkeeper)
//     // console.log(shopkeeper)
//     // console.log(randomFruit)


// }





// function draw(){
//     image(bg,0,0,width,height)
//     if (mouse.presses()){
//         watermelon.velocity.y=-7
// }

// }

let sentence=[
    "One Minute Ago...",
    "There was a student",
    "who started how not to code",
    "and this isn't their story...",
    "SIXXX SEVENNNNNNN"
];

function setup(){
    new Canvas(1400,600);
    background('black');
}

function draw(){
    fill('white');
    textAlign(CENTER,CENTER);
    textSize(48);
    for(let i =0;i<sentence.length;i++){
        text('sentence(i)');
    }
    text("hi",width/2,height/2);
}