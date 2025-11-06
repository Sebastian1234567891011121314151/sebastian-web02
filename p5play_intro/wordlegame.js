
const LIBRARY = ["APPLE","GRAPE","MANGO"]
let hint;
let attempts=0;
let hidden;
let guessInput
let button1
function setup() {
new Canvas (600,500);
background('pink');
hidden= random(LIBRARY)
console.log(hidden)
hint=hidden[0] +'_ '.repeat(hidden.length-1)
guessInput= createInput("")
guessInput.position(width/2-100,370)

button1= createButton('Guess')
button1.position(width/2+80,370)

button1.mousePressed(handleUserInput)

}

function draw()  {

let guess=guessInput.value()
background('pink');
textAlign(CENTER,CENTER );
    textSize(35);
    fill("black");
    text('Guess the hidden Word!' ,width/2,150);
    text('Attemps: '+attempts, width/2,190);
    textSize(50);
    text('Word : '+ hint,width/2,250)

}