import{ reduceNumber, incrementNumber, countDownInit, countUpInit } from './tools.js';

let domDisplay = document.querySelector('#number');
// let initVal = document.querySelector('#inital-val').value;

const increaseButton = document.querySelector('button[value="increase"]');
increaseButton.onclick = function () {
    
    // console.log('_________',initVal)

    console.log('countUpwords')
    countUpInit(domDisplay);
    
}

const decreaseButton = document.querySelector('button[value="decrease"]');
decreaseButton.onclick = function () {
    
    // console.log('_________',initVal)

    console.log('countDownwords')
    countDownInit(domDisplay);
    
}