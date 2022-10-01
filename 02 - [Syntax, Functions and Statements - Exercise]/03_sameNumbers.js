function solve(number) {
    let arr = Array.from(String(number), Number);

    let digitsSum = arr.reduce((prev, curr) => prev + curr, 0);
    let isAllElementsEqual = arr.every(x => x === arr[0]);

    console.log(isAllElementsEqual);
    console.log(digitsSum);
}

solve(2222222);
solve(1234);
