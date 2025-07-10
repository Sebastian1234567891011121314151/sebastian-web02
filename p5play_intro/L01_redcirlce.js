let x=50
let y=50

function setup(){
    new Canvas(300,300);
    background("white");
}

function draw(){
    fill ("red");
    circle(x,y,50);
    fill ("yellow");
    circle(150,150,50);

    fill ("green");
    circle(150,220,50);
}