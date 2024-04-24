class Game{

    constructor() {

        this.player = new Player()

        this.aBar = new Bars()




    }
    gameLoop() {

        

    }
    start() {
        this.gameIntervalId = setInterval(() => {
          this.gameLoop()
        }, Math.round(1000/60)) 
      }
}