class Player {

    constructor(){

        this.node = document.createElement("img")
        this.node.id = "player"

        this.node.src ="./images/player.png"

    }

    start() {
        this.gameIntervalId = setInterval(() => {
          //this.gameLoop()
        }, Math.round(1000/60)) // 60fps
      }
    
    

}