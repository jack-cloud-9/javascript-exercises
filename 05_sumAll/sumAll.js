const sumAll = function(start, end) {
    if (end < start){
        let temp = start;
        start = end;
        end = temp
    }
    if (typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }
    let val_sum = 0;
    for (let i = start; i <= end; i++) {
        val_sum += i;
    }
    return val_sum;
};

// Do not edit below this line
module.exports = sumAll;
