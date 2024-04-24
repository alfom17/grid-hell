// Variables globales
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over")

const startBtnNode = document.querySelector("#start-btn")

const gameBoxNode = document.querySelector("#game-box")

let game;

function startGame() {
    console.log("iniciando el juego")
  
    splashScreenNode.style.display = "none"
  
    gameScreenNode.style.display = "flex"
  
    game = new Game()

    console.log(game)

    game.start()
    
}

//listado de eventos
startBtnNode.addEventListener("click", startGame)