let seconds1 = 0
let seconds2 = 0
let minutes = 0
class Counter{

constructor(){

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
        }
        if (seconds2 === 6 ){
            minutes++
            seconds2 = 0
            seconds1 = 0
        }
        
    },1000)
}
}
