function solve(fruit, weight, pricePerKilo) {
    let kilos = (weight / 1000);
    let sum = kilos * pricePerKilo;

    console.log(`I need $${sum.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);
