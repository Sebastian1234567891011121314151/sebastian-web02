
const LIBRARY = ["APPLE","GRAPE","MANGO"]

let attempts=0;
let hidden= random(LIBRARY)
function setup() {
new Canvas (600,500);
background('pink');
hidden= random(LIBRARY)
console.log(hidden)
}

function draw()  {
background('pink');
textAlign(CENTER,CENTER );
    textSize(35);
    fill("black");
    text('Guess the hidden Word!' ,width/2,150);
    text('Attemps: '+attempts, width/2,190);
    textSize(50);
    text('Word : T _ _ _ _',width/2,250);

}