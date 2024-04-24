class Player {

    constructor(){

        this.node = document.createElement("img")
        this.node.id = "player"

        this.node.src ="./images/player.png"

        gameBoxNode.append(this.node)

        this.x = 50
        this.y = 50
        this.w = 60
        this.h = 60

        this.node.style.position = "absolute"
          this.node.style.top = `${this.y}px`
          this.node.style.left = `${this.x}px`

          this.node.style.width = `${this.w}px`
          this.node.style.height = `${this.h}px`
    }

    start() {
        this.gameIntervalId = setInterval(() => {
          //this.gameLoop()
        }, Math.round(1000/60)) // 60fps
      }
    
    

}