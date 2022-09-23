function largestNumber(a, b, c) {
    console.log(`The largest number is ${Math.max(a, b, c)}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);

function largestNumberParams(...params) {
    console.log(`The largest number is ${Math.max(...params)}.`);
}

largestNumberParams(5, -3, 16);
largestNumberParams(-3, -5, -22.5);
