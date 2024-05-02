const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
let count = 0;
const increase = function(event) {
    count++;
    counter.textContent = count;
};

const decrease = function() {
    count--;
    counter.textContent = count;
};

const reset = function() {
    count = 0;
    counter.textContent = count;
};
increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);