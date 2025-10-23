
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


let bird;
let pipes = [];
let score = 0;
let gameOver = false;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(135, 206, 235);

  if (!gameOver) {
    // Update and show pipes
    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();
      pipes[i].show();

      // Check for collision
      if (pipes[i].hits(bird)) {
        gameOver = true;
      }

      // Add new pipes
      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
        score++;
      }
    }

    if (frameCount % 90 === 0) {
      pipes.push(new Pipe());
    }

    // Bird actions
    bird.update();
    bird.show();

    // Score
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text(score, width / 2, 50);
  } else {
    // Game Over Screen
    fill(255, 0, 0);
    textSize(48);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
    textSize(24);
    fill(255);
    text("Press SPACE to restart", width / 2, height / 2 + 50);
  }
}

function keyPressed() {
  if (key === ' ') {
    if (gameOver) {
      resetGame();
    } else {
      bird.up();
    }
  }
}

// Bird class
class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = -12;
    this.velocity = 0;
  }

  show() {
    fill(255, 255, 0);
    ellipse(this.x, this.y, 32, 32);
  }

  up() {
    this.velocity += this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

// Pipe class
class Pipe {
  constructor() {
    this.spacing = 150;
    this.top = random(height / 6, (3 / 4) * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 60;
    this.speed = 3;
  }

  hits(bird) {
    if (
      bird.y < this.top ||
      bird.y > height - this.bottom
    ) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true;
      }
    }
    return false;
  }

  show() {
    fill(34, 139, 34);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    return this.x < -this.w;
  }
}

function resetGame() {
  pipes = [];
  score = 0;
  bird = new Bird();
  pipes.push(new Pipe());
  gameOver = false;
}