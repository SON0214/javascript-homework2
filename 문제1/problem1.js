const el = document.getElementById("hello");
const el2 = document.getElementById("color");

const myfunction = function(event) {
    const selectedColor = event.target.value;
    el.style.color = selectedColor;
};

el2.addEventListener("change", myfunction);
