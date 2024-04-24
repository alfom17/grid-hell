class Game{

    constructor() {

        this.player = new Player()

        //this.aBar = new Bars()
        this.BarArr = []


        this.gameIntervalId;
        this.barIntervalId;

    }

    barsAparece(){

        let randomPosY =  Math.floor(Math.random()* 620)
        //let tBarHorizontal = new Tbars(randomPosY)
        let barHorizontal = new Bars(randomPosY)
        //this.BarArr.push(tBarHorizontal)
        this.BarArr.push(barHorizontal)
        //setTimeout(()=>{

       // },500)
    }

    initBarFreq(){
        this.barIntervalId = setInterval(() =>{
            this.barsAparece()
            console.log("aa");
        },2000)
    }

    delBarScreen(){

        this.BarArr.forEach((eachBar, index)=>{
            setTimeout(()=>{
                this.BarArr.splice(index, 1)
                eachBar.node.remove()
            },2000)
        })


    }
    colisionBarPlayer() {

    
        this.BarArr.forEach((eachBar) => {
          setTimeout(() => {
            
              if (
                  this.player.x < eachBar.x + eachBar.w &&
                  this.player.x + this.player.w > eachBar.x &&
                  this.player.y < eachBar.y + eachBar.h &&
                  this.player.y + this.player.h > eachBar.y
                ) {
                    
                    this.gameOver()
                }
                
            },800 );
            })
        }
    
      



    gameLoop() {
        this.startCounter()
        this.delBarScreen()
        this.colisionBarPlayer()

    }
    start() {
        this.gameIntervalId = setInterval(() => {
          this.gameLoop()
        }, Math.round(1000/60)) 
      }

      gameOver() {

        
        clearInterval(this.gameIntervalId)
        clearInterval(this.barIntervalId)
    
       
        gameScreenNode.style.display = "none"
    
        counterNode.style.display = "none"
        
        gameOverScreenNode.style.display = "flex"
        
      }

      counter(){
        this.node = document.createElement ("h2")
        this.node.id = "timeCounter"
        this.node.innerText = `${minutes}:${seconds2}${seconds1}`
        counterNode.append(this.node)

      } 

      startCounter(){
        let timer = setInterval(()=>{
    
            seconds1++
            if (seconds1 === 9 ){
                seconds2++
                seconds1 = 0
            } else if (seconds2 === 6 ){
                minutes++
                seconds2 = 0
                seconds1 = 0
            }
            
        },1000)
    }
    }
     
