


let attempts=0

function setup() {
new Canvas (600,500)
background('pink')
}

function draw()  {
    
textAlign(CENTER,CENTER )
    textSize(25);
    fill("black");
    text('Guess the hidden Word!' ,width/2,150)
    text('Attemps: '+attempts, width/2,190)
    text('Word : T _ _ _ _',width/2,230)

}