const repeatString = function(string, n_times) {
    if (n_times >=0){
        return Array(n_times).fill(string).join('');
    } else if (n_times < 0){
        return 'ERROR';
    }
}

// // Do not edit below this line
module.exports = repeatString;
