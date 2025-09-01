// Grab elements
const countDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

//Variable to store count
let count = 0;

// Functions to execute
incrementBtn.addEventListener("click", () => {
   count++;
   updateDisplay();
});

decrementBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});


//Update screen
function updateDisplay(){
    countDisplay.textContent = count;

//Remove old classes
countDisplay.classList.remove("positive", "negative", "neutral");

//Add correct class based on value

if (count>0) {
    countDisplay.classList.add("positive");
}
else if (count<0){
    countDisplay.classList.add("negative");
}
else {
    countDisplay.classList.add("neutral");
}
};