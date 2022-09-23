function solve(firstWord, secondWord, thirdWord) {
    let totalLength = (firstWord + secondWord + thirdWord).length;

    console.log(totalLength);
    console.log(Math.floor(totalLength / 3));
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');
