let floor,balls;
function setup(){
new Canvas(600,400);
floor=new Sprite(300,400,600,40);
world.gravity.y= 10;


}
function draw(){
background(220);
if (mouse.presses("left")){
    balls= new Sprite(mouseX,mouseY,40,40)
}
}