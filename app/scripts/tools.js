export const reduceNumber = function(value) {
    if(value <= 0 || typeof value !== 'number' || isNaN(value)) return 0;
    return value - 1;
}

export const incrementNumber = function(value) {
    if(typeof value !== 'number' || value >= 86400 || isNaN(value)) return 0;
    return value + 1;
}




// module.exports = { reduceNumber, incrementNumber };