let x=50;
let y=50;
let gy=500;

function setup(){
    new Canvas(600,600);
    background("white");
}

function draw(){
    fill ("red");
    circle(x,y,50);
    x=x +0.5
    y=y +0.1
    fill ("yellow");
    circle(150,150,50);

    fill ("green");
    circle(150,gy,50);
    gy=gy-5
}