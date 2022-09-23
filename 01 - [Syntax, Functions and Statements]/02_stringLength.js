function stringLength(firstWord, secondWord, thirdWord) {
    let totalLength = (firstWord + secondWord + thirdWord).length;

    console.log(totalLength);
    console.log(Math.floor(totalLength / 3));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
