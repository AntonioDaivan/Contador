var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
    if (currentNumberWrapper.innerHTML < 0) {
        currentNumberWrapper.style.color = '#6a040f'
    } else {
        currentNumberWrapper.style.color = '#f1faee'
    }
}
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
    if (currentNumberWrapper.innerHTML < 0) {
        currentNumberWrapper.style.color = '#6a040f'
    } else {
        currentNumberWrapper.style.color = '#f1faee'
    }
}
