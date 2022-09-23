function solve(input) {
    let inputType = typeof (input);

    if (inputType == 'number') {
        let area = Math.PI * (input ** 2);

        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

solve(5);
solve('name');
