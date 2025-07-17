let floor;
let ball;
function setup() {
  // Set up the canvas
  new Canvas(300,300);
  background("blue"); //background color

  // Basic shape testing
  // write your codes here
  // fill("lightblue");
  // strokeWeight (10);
  // stroke ("red")
 
  // rect(75,100,250,250)

 
  // circle(120,200,50)
  // circle(280,200,50)
  // rect(170,250,60,100)
  //  circle(210,300,10)

 ball = new Sprite ();
 ball.diameter = 100;
 ball.color = "pink";
 ball.y =50;
 ball.x =50
 ball.vel.x=5;
ball.bounciness= 0.99

world.gravity.y = 10

 floor= new Sprite ();
 floor.w =800;
 floor.h =25
 floor.y=300
 floor.collider= "static"
  // End Basic shape testing

   // Create a bouncing ball sprite
   // write your codes here

}

function draw() {
  background("red");
if (ball.x>width){
  ball.vel.x=-1.1*ball.vel.x;
  }
if (ball.x<0){
  ball.vel.x=-1.1*ball.vel.x;
}
}
