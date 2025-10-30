
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

// let sentence = [
//   "One Minute Ago...",
//   "There was a student",
//   "who started how not to code",
//   "and this isn't their story...",
//   "SIXXX SEVENNNNNNN",
// ];

// let yPos;      // starting vertical position
// let speed = 5; // scroll speed

// function setup() {
//   createCanvas(1400, 600); // fixed to createCanvas (p5.js standard)
//   textAlign(CENTER, CENTER);
//   textSize(30);
//   fill('white');
//   yPos = height; // start from bottom
// }

// function draw() {
//   background('black');

//   let lineSpacing = 60; // distance between lines
//   let totalHeight = sentence.length * lineSpacing;

//   // Draw each line
//   for (let i = 0; i < sentence.length; i++) {
//     let y = yPos + i * lineSpacing;
//     text(sentence[i], width / 2, y);
//   }

//   // Move text upward
//   yPos -= speed;

//   // When text scrolls off top, reset to bottom
//   if (yPos + totalHeight < 0) {
//     yPos = height;
//   }
// }


// let player;
// let obstacles = [];
// let score = 0;
// let gameOver = false;
// let groundHeight = 100;

// function setup() {
//   createCanvas(800, 400);
//   player = new Player();
//   obstacles.push(new Obstacle());
// }

// function draw() {
//   background(30);

//   // Ground
//   fill(60);
//   rect(0, height - groundHeight, width, groundHeight);

//   if (!gameOver) {
//     // Player actions
//     player.update();
//     player.show();

//     // Obstacles
//     for (let i = obstacles.length - 1; i >= 0; i--) {
//       obstacles[i].update();
//       obstacles[i].show();

//       if (obstacles[i].hits(player)) {
//         gameOver = true;
//       }

//       if (obstacles[i].offscreen()) {
//         obstacles.splice(i, 1);
//         score++;
//       }
//     }

//     // Add new obstacles
//     if (frameCount % 90 === 0) {
//       obstacles.push(new Obstacle());
//     }

//     // Score
//     fill(255);
//     textSize(32);
//     textAlign(LEFT);
//     text(`Score: ${score}`, 20, 40);
//   } else {
//     // Game Over
//     fill(255, 0, 0);
//     textSize(48);
//     textAlign(CENTER);
//     text("Game Over!", width / 2, height / 2 - 20);
//     fill(255);
//     textSize(24);
//     text("Press SPACE to restart", width / 2, height / 2 + 20);
//   }
// }

// function keyPressed() {
//   if (key === ' ') {
//     if (gameOver) {
//       resetGame();
//     } else {
//       player.jump();
//     }
//   }
// }

// // Player class
// class Player {
//   constructor() {
//     this.size = 40;
//     this.x = 100;
//     this.y = height - groundHeight - this.size;
//     this.vy = 0;
//     this.gravity = 1;
//     this.jumpForce = -15;
//     this.onGround = true;
//   }

//   show() {
//     fill(0, 255, 255);
//     rect(this.x, this.y, this.size, this.size);
//   }

//   jump() {
//     if (this.onGround) {
//       this.vy = this.jumpForce;
//       this.onGround = false;
//     }
//   }

//   update() {
//     this.y += this.vy;
//     this.vy += this.gravity;

//     // Ground collision
//     if (this.y + this.size >= height - groundHeight) {
//       this.y = height - groundHeight - this.size;
//       this.vy = 0;
//       this.onGround = true;
//     }
//   }
// }

// // Obstacle class
// class Obstacle {
//   constructor() {
//     this.size = random(30, 50);
//     this.x = width;
//     this.y = height - groundHeight - this.size;
//     this.speed = 6;
//   }

//   show() {
//     fill(255, 0, 255);
//     rect(this.x, this.y, this.size, this.size);
//   }

//   update() {
//     this.x -= this.speed;
//   }

//   hits(player) {
//     return (
//       player.x < this.x + this.size &&
//       player.x + player.size > this.x &&
//       player.y < this.y + this.size &&
//       player.y + player.size > this.y
//     );
//   }

//   offscreen() {
//     return this.x + this.size < 0;
//   }
// }

// function resetGame() {
//   player = new Player();
//   obstacles = [];
//   obstacles.push(new Obstacle());
//   score = 0;
//   gameOver = false;
// }







let friends




let TimCheese ={name:"TimCheese",gender:"M",height:200,house:'Bishan'}
let Tim ={name:"Tim",gender:'F',height:140,house:'Bishan'}
let Cheese ={name:"Cheese",gender:'F',height:160,house:'C'}
let TimChe ={name:"TimChe",gender:'M',height:175,house:'Hougang'}
let Chee ={name:"Chee",gender:'M',height:167,house:'Hougang'}
let Teacher ={name:"Teacher",gender:'F',height:160,house:'Hougang'}
let Me ={name:"Me",gender:'M',height:164,house:'Hougang'}



friends=[TimCheese,Tim,Cheese,TimChe,Chee,Teacher,Me]

for(let one of friends){
  if(one.gender==="F")
    continue;
console.log(one)
}





