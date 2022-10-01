function solve(number, operator1, operator2, operator3, operator4, operator5) {
    let getResult = {
        'chop': function () { return number = number / 2; },
        'dice': function () { return number = Math.sqrt(number); },
        'spice': function () { return number = number + 1; },
        'bake': function () { return number = number * 3; },
        'fillet': function () { return number = number - (number / 5); },
    };

    console.log(
        getResult[operator1](number),
        getResult[operator2](number),
        getResult[operator3](number),
        getResult[operator4](number),
        getResult[operator5](number));
}

solve(32, 'chop', 'chop', 'chop', 'chop', 'chop');
solve(9, 'dice', 'spice', 'chop', 'bake', 'fillet');
