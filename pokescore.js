const player = document.getElementById("player");
const pokeball = document.getElementById("pokeball");
const buttonPlayStop = document.getElementById("buttonPlayStop");
const background  = document.getElementById("background");
const board = document.getElementById("board");

let scoreInterval;
let score= 0;

board.addEventListener("click", function (){
    playerJump();
})

function playerJump(){
    player.classList.add("playerJump");
}

player.addEventListener('animationend', () => {
    removeJump();
})

function removeJump(){
    player.classList.remove("playerJump");
}

function pauseAnimation(){
    pokeball.style.animationPlayState = "paused";
    player.style.animationPlayState = "paused";
    background.style.animationPlayState = "paused";
}

function pauseGame(){
    pauseAnimation();
    stopScore();
}

function resumeScore(){
    scoreInterval = setInterval(() =>{
        score++;
        document.getElementById("score").innerText = score;
        }, 1000 )
}

function stopScore(){
    clearInterval(scoreInterval);
}

function resumeAnimation(){
    pokeball.style.animationPlayState = "running";
    player.style.animationPlayState = "running";
    background.style.animationPlayState = "running";
}

function resumeGame(){
resumeAnimation();
resumeScore();
}

buttonPlayStop.addEventListener('click', () => {
    if (buttonPlayStop.classList.contains("play")){
        resumeGame();
    }
    else{
        pauseGame();
    }
    buttonPlayStop.classList.toggle("play");
})

resumeScore();

const restartButton = document.getElementById("restartGame");

restartButton.addEventListener("click", restartGame) 

function restartGame(){
resetScore();
removeJump();
pokeball.classList.remove("pokeballMove");
void pokeball.offsetWidth;
pokeball.classList.add("pokeballMove");
}

function resetScore(){
    score = 0;
    document.getElementById("score").innerText = score;
}

document.addEventListener("keyup",  (event) => {
    if (event.key == 'ArrowUp') {
        playerJump();
    }
    if (event.key.toLowerCase() == "w") {
        playerJump();
    }
})