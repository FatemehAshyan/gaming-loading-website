let car = document.getElementById("car");
let barrier = document.getElementById("barrier");
let gameOver = document.querySelector("p");
function jump() {
    car.classList.add("jump");
    setTimeout(()=>{
        car.classList.remove("jump");
    },500);
}
document.body.addEventListener("keydown",function(){
    jump();
})

// let isAlive= setInterval() {
    // }
let isAlive = setInterval(() => {
        
    let carBottom = parseInt(window.getComputedStyle(car).getPropertyValue("bottom"));
    // console.log(carBottom);
    let barrierLeft = parseInt(
        window.getComputedStyle(barrier).getPropertyValue("left")
    );
    // console.log(barrierLeft);
    if (barrierLeft<100 && barrierLeft>0&& carBottom<50) {
            setGameOver(true);
        document.body.addEventListener("click",function(event){
            setGameOver(false);// to common game after game over
        })
    }
}, 10);
function setGameOver(isGameOver) {
    if (isGameOver) {
        gameOver.style.display = "block";
        barrier.classList.remove("move");
    }else{
        gameOver.style.display = "none";
        barrier.classList.add("move");
    }
}