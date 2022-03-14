const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const body = document.querySelector("body");
const colorText = document.querySelector("span");
const btn = document.getElementById("btn");

const getRandomNumber = () => Math.floor(Math.random() * colors.length);

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    colorText.textContent = colors[randomNumber];
    body.style.backgroundColor = colors[randomNumber];
});









