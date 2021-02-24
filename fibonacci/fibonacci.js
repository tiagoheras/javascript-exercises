const fibonacci = function (num) {
    const fibonacciArray = [1, 1];
    for (var i = 0; i < num; i++) {
        let result = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
        fibonacciArray.push(result);
    }
    return fibonacciArray[num - 1];
}

console.log(fibonacci(4));

module.exports = fibonacci
