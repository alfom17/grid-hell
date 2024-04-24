// Variables globales
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over")

const counterNode = document.querySelector("#counter")
const startBtnNode = document.querySelector("#start-btn")

const gameBoxNode = document.querySelector("#game-box")

let game;

function startGame() {
    console.log("iniciando el juego")
  
    splashScreenNode.style.display = "none"
  
    gameScreenNode.style.display = "flex"

    startBtnNode.style.display = "none"
  
    game = new Game()
    counter = new Counter()
    console.log(game)


    game.start()
    
    counter.startCounter()
}

//listado de eventos
startBtnNode.addEventListener("click", () =>{
    
    startGame()


})