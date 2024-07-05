let squares = document.querySelectorAll('.square');
let score = document.querySelector('.score');
let timer = document.querySelector('.timer');
let text = document.querySelector('.text');
let btn=document.querySelector('.btn')
let hitpostion;
let result = 0;

let timerid = null;
let time=60;
function start(){
    btn.addEventListener('click',()=>{
       result=0
text.addEventListener('input', () => {
    // Update the 'time' variable with the current value of the input
    if (text.value < 0) {
        alert("Please fill a positive value for time");
        return; // Exit the function if the condition is met
      }
      
    time = text.value;
});
function randomsquare() {
   
    if(time>0){ // Remove 'mole' class from all squares
        squares.forEach(square => {
            square.classList.remove('mole');
        });
    
        // Get a random index to add 'mole' class to a square
       
        const randomIndex = Math.floor(Math.random() * squares.length);
        console.log(randomIndex);
    
        // Add 'mole' class to the randomly selected square
    squares[randomIndex].classList.add('mole');
    hitpostion = squares[randomIndex];
}}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitpostion.id) {
            result++;
            score.textContent = result;
            hitpostion = null;
        }
    });
});


function moveMove() {
   
    timerid = setInterval(randomsquare, 500);
}

function timercount(){
    if (time > 0) {
        time--; 
      }
      

      
timer.textContent=time;
if (time==0) {
clearInterval(countdown)
clearInterval(timerid)

alert("Game Over! Your final Score is " + result );

time = text.value;

}

}
let countdown=setInterval(timercount,1000)
timercount()
// Call the function to set up initially
randomsquare();
moveMove();

        
    }
    )
}
start()
