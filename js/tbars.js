class Tbars{


    constructor(posY){
    
        this.node = document.createElement("img")
        this.node.id = "tbar"
    
         this.node.src = "./images/lateralBars.png"
    
        gameBoxNode.append(this.node)
    
         this.x = 0
         this.y = posY
         this.w = 1200
         this.h = 80
    
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        
        this.node.style.opacity = 0.5;
    }
    
    
    }