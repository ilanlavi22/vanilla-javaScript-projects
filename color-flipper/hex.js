//const getRandomNumber = () => Math.floor(Math.random() * 16777215).toString(16);
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const body = document.querySelector("body");
const colorText = document.querySelector("span");
const btn = document.getElementById("btn");

const getRandomNumber = () => Math.floor(Math.random() * hex.length);

btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    colorText.textContent = hexColor;
    body.style.backgroundColor = hexColor;
});



