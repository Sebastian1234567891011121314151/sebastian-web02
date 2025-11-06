
const LIBRARY = ["APPLE","GRAPE","MANGO"]
let hint;
let attempts=0;
let hidden;
function setup() {
new Canvas (600,500);
background('pink');
hidden= random(LIBRARY)
console.log(hidden)
hint=hidden[0]
}

function draw()  {
background('pink');
textAlign(CENTER,CENTER );
    textSize(35);
    fill("black");
    text('Guess the hidden Word!' ,width/2,150);
    text('Attemps: '+attempts, width/2,190);
    textSize(50);

}