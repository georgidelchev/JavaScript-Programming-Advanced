function solve(firstNumber, secondNumber) {
    let greatestCommonDivisor = 0;

    for (let i = 1; i < Math.max(firstNumber, secondNumber); i++) {
        if (firstNumber % i == 0 && secondNumber % i == 0) {
            greatestCommonDivisor = i;
        }
    }

    console.log(greatestCommonDivisor);
}

solve(15, 5);
solve(2154, 458);
