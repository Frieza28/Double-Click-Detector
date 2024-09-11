let lastClickTime = 0;
let clickCounter = 0;
let doubleClickCounter = 0;
let clickTimes = [];


const button = document.getElementById('clickButton');
const textarea = document.getElementById('textarea');
const rectangle = document.getElementById('main_Rectangle');
const clickCounterElement = document.getElementById('clickCounter');
const doubleClickCounterElement = document.getElementById('doubleClickCounter');
const resetButton = document.getElementById('resetCounter');

button.addEventListener('click', () => {
    const currentTime = Date.now();
    
    if (lastClickTime === 0) {
        textarea.value = "Primeiro clique.\n" + textarea.value;
    } else {
        const timeBetweenClicks = (currentTime - lastClickTime) / 1000;
        clickTimes.push(timeBetweenClicks);
        textarea.value = `Tempo entre cliques: ${timeBetweenClicks.toFixed(2)}s\n` + textarea.value;

        if (timeBetweenClicks <= 0.08) {
            rectangle.style.backgroundColor = 'red';
            doubleClickCounter++;
            doubleClickCounterElement.textContent = doubleClickCounter;
        }
    }

    lastClickTime = currentTime;
    clickCounter++;
    clickCounterElement.textContent = clickCounter;
});

resetButton.addEventListener('click', () => {
    clickCounter = 0;
    doubleClickCounter = 0;
    clickTimes = [];
    textarea.value = '';

    clickCounterElement.textContent = clickCounter;
    doubleClickCounterElement.textContent = doubleClickCounter;

    rectangle.style.backgroundColor = "rgb(1, 1, 160)";
});