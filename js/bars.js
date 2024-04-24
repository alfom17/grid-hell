class Bars{


constructor(posY){

    this.node = document.createElement("img")
    this.node.id = "bar"

     this.node.src = "./images/lateralBars.png"

    gameBoxNode.append(this.node)

     this.x = 0
     this.y = 80
     this.w = 1200
     this.h = 80

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`

}


}