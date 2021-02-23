function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function sum(numbers) {
	const numbersArray = Array.from(numbers);
	if (numbersArray.length === 0) {
		return 0;
	} else {
		const result = numbersArray.reduce((total, number) => {
			return total + number;
		})
		return result;
	}
}

function multiply(numbers) {
	const numbersArray = Array.from(numbers);
	const result = numbersArray.reduce((total, number) => {
		return total * number;
	}, 1)
	return result;
}

function power(base, exponent) {
	return base ** exponent;
}

function factorial(num) {
	if (num === 0) {
		return 1;
	} else {
		let total = num;
		for (let i = num - 1; i > 0; i--) {
			total = total * i;
		}
		return total;
	}

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}