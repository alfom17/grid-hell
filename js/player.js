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

          this.movementSpeed = 20
    }

    movementUpEffect(){
      if (this.y > 0){
        this.y -= this.movementSpeed
        this.node.style.top = `${this.y}px`
      }
    }
    
    movementDownEffect(){
      if  ((this.y + this.h) < gameBoxNode.offsetHeight){
        this.y += this.movementSpeed
        this.node.style.top = `${this.y}px`
      }
    }
    movementLeftEffect(){
      if (this.x > 0){
        this.x -= this.movementSpeed
        this.node.style.left = `${this.x}px`
      }
    }
    
    movementRightEffect(){
      if  ((this.x + this.w) < gameBoxNode.offsetWidth){
        this.x += this.movementSpeed
        this.node.style.left = `${this.x}px`
      }
    }
    
}