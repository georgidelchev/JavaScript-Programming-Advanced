function solve(array) {
    let arraySum = array.reduce((prev, curr) => prev + curr, 0);
    console.log(arraySum);

    let inverseSum = 0;
    array.forEach(element => inverseSum += 1 / element);
    console.log(inverseSum);

    let concatArrayElements = array.join('');
    console.log(concatArrayElements);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);
