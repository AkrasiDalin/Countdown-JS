let interval = null;

export const reduceNumber = function(value) {
    console.log('going', value)
    if(value <= 0 || typeof value !== 'number' || isNaN(value)) return 0;
    return value - 1;
}

export const incrementNumber = function(value) {
    if(typeof value !== 'number' || value >= 86400 || isNaN(value)) return 0;
    return value + 1;
}

export const countDownInit = (display, min, max) => {
    console.log('activated', display.innerHTML)
    clearInterval(interval);
    +max ? display.innerHTML = max  : '';

    display.innerHTML = reduceNumber(+display.innerHTML);
    min && +display.innerHTML === min || +display.innerHTML === 0 ? clearInterval(interval) : '';

}

export const countUpInit = (display, min, max) => {
    console.log('activated', display.innerHTML)
    clearInterval(interval);
    +min ? display.innerHTML = min  : '';

    display.innerHTML = incrementNumber(+display.innerHTML);
    max && +display.innerHTML === max ? clearInterval(interval) : '';

}



// module.exports = { reduceNumber, incrementNumber };