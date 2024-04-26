let timer= 0

class Game{

    constructor() {

        this.player = new Player()
        
        this.counter = new Counter()
        //this.aBar = new Bars()
        this.BarArr = []
        
        this.gameIntervalId;
        this.barIntervalId;
        this.timerId;
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
        this.delBarScreen()
        this.colisionBarPlayer()

    }
    start() {
        
        timer = 0
        this.counter.node.innerText = 0
        this.gameIntervalId = setInterval(() => {
          this.gameLoop()
          
        }, Math.round(1000/60)) 
      }

      gameOver() {

        
        clearInterval(this.gameIntervalId)
        clearInterval(this.barIntervalId)
        clearInterval(this.timerId)
        counterNode.innerText = ""
        
       
        gameScreenNode.style.display = "none"
    
        counterNode.style.display = "none"
        
        gameOverScreenNode.style.display = "flex"
        restBtnNode.style.display = "flex"
        
      }

      

      startCounter(){
             this.timerId = setInterval(()=>{
            console.log("andando");
            timer = timer + 1
            this.counter.node.innerText = timer
            

           /* this.counter.seconds1++
            if (this.counter.seconds1 === 9 ){
                this.counter.seconds2++
                this.counter.seconds1 = 0
            } else if (this.counter.seconds2 === 6 ){
                this.counter.minutes++
                this.counter.seconds2 = 0
                this.counter.seconds1 = 0
            }*/
            
        },1000)
    }
    }
     
