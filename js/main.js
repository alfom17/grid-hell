// Variables globales
const gameTitleNode = document.querySelector("#game-title")
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over")

const counterNode = document.querySelector("#counter")
const startBtnNode = document.querySelector("#start-btn")

const gameBoxNode = document.querySelector("#game-box")

let game;
let counter;

function startGame() {
    console.log("iniciando el juego")
  
    splashScreenNode.style.display = "none"
  
    gameScreenNode.style.display = "flex"

    startBtnNode.style.display = "none"
    
    gameTitleNode.style.display = "none"

    game = new Game()
    counter = new Counter()
    console.log(game)


    game.start()
    
    counter.startCounter()
    game.initBarFreq()

}

//listado de eventos
startBtnNode.addEventListener("click", () =>{
    
    startGame()
    game.start()

})
window.addEventListener("keydown",event =>{
    if (event.key === 'w' || event.key === 'W') {
    //console.log("aaaa");
    game.player.movementUpEffect()
    } else if (event.key === 's' || event.key === 'S'){
        game.player.movementDownEffect()
    }else if (event.key === 'a' || event.key === 'A'){
        game.player.movementLeftEffect()
    }else if (event.key === 'd' || event.key === 'D'){
        game.player.movementRightEffect()
    } else if ((event.key === 'w' || event.key === 'W') && (event.key === 'a' || event.key === 'A')){
        game.player.movementUpEffect()
        game.player.movementLeftEffect()
    } else if ((event.key === 'w' || event.key === 'W') && (event.key === 'd' || event.key === 'D')){
        game.player.movementUpEffect()
        game.player.movementRightEffect()
    } else if ((event.key === 's' || event.key === 'S') && (event.key === 'a' || event.key === 'A')){
        game.player.movementDownEffect()
        game.player.movementLeftEffect()
    } else if ((event.key === 's' || event.key === 'S') && (event.key === 'd' || event.key === 'D')){
        game.player.movementDownEffect()
        game.player.movementLeftEffect()
    }
    
})