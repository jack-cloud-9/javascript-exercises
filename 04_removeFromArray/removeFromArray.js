const removeFromArray = function(array, ...filter_values) {
    return array.filter(item => !filter_values.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
