const removeFromArray = function () {
    let resultArray = [];

    for (let argIndex = 1; argIndex < arguments.length; argIndex++) {
        const argument = arguments[argIndex];
        for (let elIndex = 0; elIndex < arguments[0].length; elIndex++) {
            const element = arguments[0][elIndex];
            if (element === argument) {
                arguments[0].splice(elIndex, 1);
            } else {
                continue;
            }
        }
    }
    resultArray = arguments[0];
    return resultArray;
}
console.log(removeFromArray([1, 2, 3, 4, "hola"],4, 3, 1, 2, "hola"));

module.exports = removeFromArray
