const span = document.getElementById("value");
const btnContainer = document.querySelector(".button-container");
let counter = 0;

const btnActions = (e) => {
    const actionButton = e.target;
    if (actionButton.classList[1] === 'btn-increase') {
        counter++;
    } else if (actionButton.classList[1] === 'btn-decrease') {
        counter--;
    } else {
        counter = 0;
    }
    if (counter > 0 ? span.style.color = "green" : span.style.color = "red");
    if (counter === 0) span.style.color = "inherit";
    span.textContent = counter;
}
btnContainer.addEventListener('click', btnActions);







