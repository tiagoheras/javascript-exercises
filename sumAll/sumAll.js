const sumAll = function (num1, num2) {
    let finalResult = 0;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (num1 > num2) {
        for (let number = num2; number <= num1; number++) {
            finalResult += number;
        }
    } else {
        for (let number = num1; number <= num2; number++) {
            finalResult += number;
        }
    }
    return finalResult;
}

module.exports = sumAll
