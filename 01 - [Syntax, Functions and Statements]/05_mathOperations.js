function solve(firstNumber, secondNumber, operator) {
    let getResult = {
        '+': function (firstNumber, secondNumber) { return firstNumber + secondNumber; },
        '-': function (firstNumber, secondNumber) { return firstNumber - secondNumber; },
        '*': function (firstNumber, secondNumber) { return firstNumber * secondNumber; },
        '/': function (firstNumber, secondNumber) { return firstNumber / secondNumber; },
        '%': function (firstNumber, secondNumber) { return firstNumber % secondNumber; },
        '**': function (firstNumber, secondNumber) { return firstNumber ** secondNumber; },
    }

    console.log(getResult[operator](firstNumber, secondNumber));
}

solve(5, 6, '+');
solve(3, 5.5, '*');
